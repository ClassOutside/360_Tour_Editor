# R360 Web Viewer

Purpose: 
  (Incomplete) An electron application for collecting a series of 360 photos and videos to create slideshows and tours, with interactable detail and transition hotspots. 


## How to Launch

1. **Using Node 18.18.2**
2. *(Edited repos can be removed when a new version of uikit is available with the slider change: [uikit commit](https://github.com/pmndrs/uikit/commit/ccdd6299b491789eec07b2738f9da8eb3bb57eca))*
3. **Download Project**
4. **Run** `npm install` **in root**
5. **Run** `npm install` **in ViewerPOC**
6. **Run** `npm install` **in ViewerPOC/EditedRepos**
7. **Use OpenSSL** to generate `cert.pem` and `key.pem` in the `keys` folder
9. **Make any modifications to `defaults.json`**
   - `fileLocation` is one important option
10. **Ensure `public` folder contains required files**
   - Any icons mentioned in `defaults.json`
   -	All 512x512 except arrows which are 308x512
11. Run npm run dev
12. Open the site in the browser, accept any risk due to using a self signed certificate for https


## License Links / Credits:
-  free-icons: https://github.com/free-icons/free-icons/blob/master/LICENSE
-  Pmndrs UIKit: https://github.com/pmndrs/uikit
-  Polyhaven: https://polyhaven.com/license
