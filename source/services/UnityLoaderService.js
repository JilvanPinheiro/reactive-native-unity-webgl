export default class UnityLoaderService {
  constructor() {
    this.documentHead = document.getElementsByTagName("head")[0];
    this.unityLoaderScript = null;
  }
  append(src) {
    return new Promise((resolve, reject) => {
      this.unityLoaderScript = document.createElement("script");
      this.unityLoaderScript.type = "text/javascript";
      this.unityLoaderScript.async = true;
      this.unityLoaderScript.src = src;
      this.unityLoaderScript.onload = () => {
        resolve();
      };
      this.documentHead.appendChild(this.unityLoaderScript);
    });
  }
  unmount() {
    /// unmounting is disabled due to bug
    /// https://github.com/jeffreylanters/react-unity-webgl/issues/22
    // if (this.unityLoaderScript !== null) {
    //     this.documentHead.removeChild(this.unityLoaderScript)
    // }
  }
}
