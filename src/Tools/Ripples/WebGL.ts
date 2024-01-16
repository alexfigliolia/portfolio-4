import { BrowserSupport } from "./BrowserSupport";
import { Options } from "./Options";
import { StyleCache } from "./StyleCache";
import type { IRipples, Program } from "./types";

export class WebGL extends Options {
  quad!: WebGLBuffer;
  target: HTMLElement;
  bufferReadIndex = 1;
  bufferWriteIndex = 0;
  dropProgram!: Program;
  renderProgram!: Program;
  updateProgram!: Program;
  canvas: HTMLCanvasElement;
  GL: WebGLRenderingContext;
  textureDelta: Float32Array;
  StyleCache = new StyleCache();
  textures: WebGLTexture[] = [];
  imageSource: string | null = null;
  frameBuffers: WebGLFramebuffer[] = [];
  static browserSupport = new BrowserSupport();
  backgroundTexture: WebGLTexture | null = null;
  transparentPixels = this.createImageData(32, 32);
  constructor(target: HTMLElement, options: Partial<IRipples>) {
    super(options);
    this.target = target;
    this.textureDelta = new Float32Array([
      1 / this.resolution,
      1 / this.resolution,
    ]);
    this.canvas = document.createElement("canvas");
    this.positionCanvas();
    this.GL = this.createGL(this.canvas);
  }

  protected initializeWebGL() {
    const { arrayType, linearSupport, type } = WebGL.browserSupport;
    const textureData = arrayType
      ? new arrayType(this.resolution * this.resolution * 4)
      : null;
    for (let i = 0; i < 2; i++) {
      const texture = this.GL.createTexture()!;
      const frameBuffer = this.GL.createFramebuffer()!;
      this.GL.bindFramebuffer(this.GL.FRAMEBUFFER, frameBuffer);
      this.GL.bindTexture(this.GL.TEXTURE_2D, texture);
      this.GL.texParameteri(
        this.GL.TEXTURE_2D,
        this.GL.TEXTURE_MIN_FILTER,
        linearSupport ? this.GL.LINEAR : this.GL.NEAREST,
      );
      this.GL.texParameteri(
        this.GL.TEXTURE_2D,
        this.GL.TEXTURE_MAG_FILTER,
        linearSupport ? this.GL.LINEAR : this.GL.NEAREST,
      );
      this.GL.texParameteri(
        this.GL.TEXTURE_2D,
        this.GL.TEXTURE_WRAP_S,
        this.GL.CLAMP_TO_EDGE,
      );
      this.GL.texParameteri(
        this.GL.TEXTURE_2D,
        this.GL.TEXTURE_WRAP_T,
        this.GL.CLAMP_TO_EDGE,
      );
      this.GL.texImage2D(
        this.GL.TEXTURE_2D,
        0,
        this.GL.RGBA,
        this.resolution,
        this.resolution,
        0,
        this.GL.RGBA,
        type,
        textureData,
      );
      this.GL.framebufferTexture2D(
        this.GL.FRAMEBUFFER,
        this.GL.COLOR_ATTACHMENT0,
        this.GL.TEXTURE_2D,
        texture,
        0,
      );
      this.textures.push(texture);
      this.frameBuffers.push(frameBuffer);
    }
    this.quad = this.GL.createBuffer()!;
    this.GL.bindBuffer(this.GL.ARRAY_BUFFER, this.quad);
    this.GL.bufferData(
      this.GL.ARRAY_BUFFER,
      new Float32Array([-1, -1, +1, -1, +1, +1, -1, +1]),
      this.GL.STATIC_DRAW,
    );
    this.initShaders();
    this.initTexture();
    this.setTransparentTexture();
    this.loadImage();
    this.GL.clearColor(0, 0, 0, 0);
    this.GL.blendFunc(this.GL.SRC_ALPHA, this.GL.ONE_MINUS_SRC_ALPHA);
  }

  protected hideCSSBackground() {
    const inlineCSS = this.target.style.backgroundImage;
    if (inlineCSS === "none") {
      return;
    }
    this.StyleCache.set("originalInlineCSS", inlineCSS);
    this.StyleCache.set(
      "originalCSSBackgroundImage",
      window.getComputedStyle(this.target).backgroundImage,
    );
    this.target.style.backgroundImage = "none";
  }

  protected render() {
    this.GL.bindFramebuffer(this.GL.FRAMEBUFFER, null);
    this.GL.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.GL.enable(this.GL.BLEND);
    this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT);
    this.GL.useProgram(this.renderProgram.id);
    this.bindTexture(this.backgroundTexture, 0);
    this.bindTexture(this.textures[0], 1);
    this.GL.uniform1f(
      this.renderProgram.locations.perturbance,
      this.perturbance,
    );
    this.GL.uniform2fv(
      this.renderProgram.locations.topLeft,
      // @ts-ignore
      this.renderProgram.uniforms.topLeft,
    );
    this.GL.uniform2fv(
      this.renderProgram.locations.bottomRight,
      // @ts-ignore
      this.renderProgram.uniforms.bottomRight,
    );
    this.GL.uniform2fv(
      this.renderProgram.locations.containerRatio,
      // @ts-ignore
      this.renderProgram.uniforms.containerRatio,
    );
    this.GL.uniform1i(this.renderProgram.locations.samplerBackground, 0);
    this.GL.uniform1i(this.renderProgram.locations.samplerRipples, 1);
    this.drawQuad();
    this.GL.disable(this.GL.BLEND);
  }

  protected update() {
    this.GL.viewport(0, 0, this.resolution, this.resolution);
    this.GL.bindFramebuffer(
      this.GL.FRAMEBUFFER,
      this.frameBuffers[this.bufferWriteIndex],
    );
    this.bindTexture(this.textures[this.bufferReadIndex]);
    this.GL.useProgram(this.updateProgram.id);
    this.drawQuad();
    this.swapBufferIndices();
  }

  protected drawQuad() {
    this.GL.bindBuffer(this.GL.ARRAY_BUFFER, this.quad);
    this.GL.vertexAttribPointer(0, 2, this.GL.FLOAT, false, 0, 0);
    this.GL.drawArrays(this.GL.TRIANGLE_FAN, 0, 4);
  }

  protected swapBufferIndices() {
    this.bufferWriteIndex = 1 - this.bufferWriteIndex;
    this.bufferReadIndex = 1 - this.bufferReadIndex;
  }

  protected isPercentage(str: string) {
    return str[str.length - 1] == "%";
  }

  protected bindTexture(texture: WebGLTexture | null, unit = 0) {
    this.GL.activeTexture(this.GL.TEXTURE0 + (unit || 0));
    this.GL.bindTexture(this.GL.TEXTURE_2D, texture);
  }

  private positionCanvas() {
    this.canvas.width = this.target.offsetWidth;
    this.canvas.height = this.target.offsetHeight;
    this.canvas.style.position = "absolute";
    this.canvas.style.top = "0";
    this.canvas.style.right = "0";
    this.canvas.style.bottom = "0";
    this.canvas.style.left = "0";
    this.canvas.style.zIndex = "-1";
    this.target.appendChild(this.canvas);
  }

  private createGL(canvas: HTMLCanvasElement) {
    return (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext;
  }

  private compileSource(type: GLenum, source: string) {
    const shader = this.GL.createShader(type)!;
    this.GL.shaderSource(shader, source);
    this.GL.compileShader(shader);
    if (!this.GL.getShaderParameter(shader, this.GL.COMPILE_STATUS)) {
      throw new Error("compile error: " + this.GL.getShaderInfoLog(shader)!);
    }
    return shader;
  }

  private createImageData(width: number, height: number) {
    try {
      return new ImageData(width, height);
    } catch (e) {
      // Fallback for IE
      const canvas = document.createElement("canvas");
      return canvas.getContext("2d")?.createImageData(width, height);
    }
  }

  private isPowerOfTwo(x: number) {
    return (x & (x - 1)) == 0;
  }

  private createProgram(vertexSource: string, fragmentSource: string) {
    const program = { id: this.GL.createProgram()! } as Program;
    this.GL.attachShader(
      program.id,
      this.compileSource(this.GL.VERTEX_SHADER, vertexSource),
    );
    this.GL.attachShader(
      program.id,
      this.compileSource(this.GL.FRAGMENT_SHADER, fragmentSource),
    );
    this.GL.linkProgram(program.id);
    if (!this.GL.getProgramParameter(program.id, this.GL.LINK_STATUS)) {
      throw new Error("link error: " + this.GL.getProgramInfoLog(program.id)!);
    }
    program.uniforms = {};
    program.locations = {};
    this.GL.useProgram(program.id);
    this.GL.enableVertexAttribArray(0);
    let match, name;
    const regex = /uniform (\w+) (\w+)/g;
    const shaderCode = vertexSource + fragmentSource;
    while ((match = regex.exec(shaderCode)) != null) {
      name = match[2];
      program.locations[name] = this.GL.getUniformLocation(program.id, name)!;
    }
    return program;
  }

  private initShaders() {
    const vertexShader = [
      "attribute vec2 vertex;",
      "varying vec2 coord;",
      "void main() {",
      "coord = vertex * 0.5 + 0.5;",
      "gl_Position = vec4(vertex, 0.0, 1.0);",
      "}",
    ].join("\n");

    this.dropProgram = this.createProgram(
      vertexShader,
      [
        "precision highp float;",

        "const float PI = 3.141592653589793;",
        "uniform sampler2D texture;",
        "uniform vec2 center;",
        "uniform float radius;",
        "uniform float strength;",

        "varying vec2 coord;",

        "void main() {",
        "vec4 info = texture2D(texture, coord);",

        "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);",
        "drop = 0.5 - cos(drop * PI) * 0.5;",

        "info.r += drop * strength;",

        "gl_FragColor = info;",
        "}",
      ].join("\n"),
    );

    this.updateProgram = this.createProgram(
      vertexShader,
      [
        "precision highp float;",

        "uniform sampler2D texture;",
        "uniform vec2 delta;",

        "varying vec2 coord;",

        "void main() {",
        "vec4 info = texture2D(texture, coord);",

        "vec2 dx = vec2(delta.x, 0.0);",
        "vec2 dy = vec2(0.0, delta.y);",

        "float average = (",
        "texture2D(texture, coord - dx).r +",
        "texture2D(texture, coord - dy).r +",
        "texture2D(texture, coord + dx).r +",
        "texture2D(texture, coord + dy).r",
        ") * 0.25;",

        "info.g += (average - info.r) * 2.0;",
        "info.g *= 0.995;",
        "info.r += info.g;",

        "gl_FragColor = info;",
        "}",
      ].join("\n"),
    );
    this.GL.uniform2fv(this.updateProgram.locations.delta, this.textureDelta);

    this.renderProgram = this.createProgram(
      [
        "precision highp float;",

        "attribute vec2 vertex;",
        "uniform vec2 topLeft;",
        "uniform vec2 bottomRight;",
        "uniform vec2 containerRatio;",
        "varying vec2 ripplesCoord;",
        "varying vec2 backgroundCoord;",
        "void main() {",
        "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);",
        "backgroundCoord.y = 1.0 - backgroundCoord.y;",
        "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;",
        "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);",
        "}",
      ].join("\n"),
      [
        "precision highp float;",

        "uniform sampler2D samplerBackground;",
        "uniform sampler2D samplerRipples;",
        "uniform vec2 delta;",

        "uniform float perturbance;",
        "varying vec2 ripplesCoord;",
        "varying vec2 backgroundCoord;",

        "void main() {",
        "float height = texture2D(samplerRipples, ripplesCoord).r;",
        "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;",
        "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;",
        "vec3 dx = vec3(delta.x, heightX - height, 0.0);",
        "vec3 dy = vec3(0.0, heightY - height, delta.y);",
        "vec2 offset = -normalize(cross(dy, dx)).xz;",
        "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);",
        "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;",
        "}",
      ].join("\n"),
    );
    this.GL.uniform2fv(this.renderProgram.locations.delta, this.textureDelta);
  }

  private initTexture() {
    this.backgroundTexture = this.GL.createTexture();
    this.GL.bindTexture(this.GL.TEXTURE_2D, this.backgroundTexture);
    this.GL.pixelStorei(this.GL.UNPACK_FLIP_Y_WEBGL, 1);
    this.GL.texParameteri(
      this.GL.TEXTURE_2D,
      this.GL.TEXTURE_MAG_FILTER,
      this.GL.LINEAR,
    );
    this.GL.texParameteri(
      this.GL.TEXTURE_2D,
      this.GL.TEXTURE_MIN_FILTER,
      this.GL.LINEAR,
    );
  }

  private setTransparentTexture() {
    this.GL.bindTexture(this.GL.TEXTURE_2D, this.backgroundTexture);
    this.GL.texImage2D(
      this.GL.TEXTURE_2D,
      0,
      this.GL.RGBA,
      this.GL.RGBA,
      this.GL.UNSIGNED_BYTE,
      this.transparentPixels as TexImageSource,
    );
  }

  private loadImage() {
    const { backgroundImage } = window.getComputedStyle(this.target);
    const newImageSource =
      this.imageUrl ||
      this.extractUrl(this.StyleCache.get("originalCSSBackgroundImage")) ||
      this.extractUrl(backgroundImage);
    if (newImageSource == this.imageSource) {
      return;
    }
    this.imageSource = newImageSource;
    if (!this.imageSource) {
      this.setTransparentTexture();
      return;
    }
    const image = new Image();
    image.onload = () => {
      const wrapping =
        this.isPowerOfTwo(image.width) && this.isPowerOfTwo(image.height)
          ? this.GL.REPEAT
          : this.GL.CLAMP_TO_EDGE;
      this.GL.bindTexture(this.GL.TEXTURE_2D, this.backgroundTexture);
      this.GL.texParameteri(
        this.GL.TEXTURE_2D,
        this.GL.TEXTURE_WRAP_S,
        wrapping,
      );
      this.GL.texParameteri(
        this.GL.TEXTURE_2D,
        this.GL.TEXTURE_WRAP_T,
        wrapping,
      );
      this.GL.texImage2D(
        this.GL.TEXTURE_2D,
        0,
        this.GL.RGBA,
        this.GL.RGBA,
        this.GL.UNSIGNED_BYTE,
        image,
      );
      this.StyleCache.set("backgroundWidth", image.width);
      this.StyleCache.set("backgroundHeight", image.height);
      this.hideCSSBackground();
    };
    image.onerror = () => {
      this.setTransparentTexture();
    };
    image.crossOrigin = this.isDataUri(this.imageSource)
      ? null
      : this.crossOrigin;
    image.src = this.imageSource;
  }
}
