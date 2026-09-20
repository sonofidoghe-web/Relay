// Shared Firebase setup for Relay. Imported as a module by every page that needs auth.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDp3L2FPN6rIFOwP63n9ABOVzzc7J5pBsc",
  authDomain: "relay-78728.firebaseapp.com",
  projectId: "relay-78728",
  storageBucket: "relay-78728.firebasestorage.app",
  messagingSenderId: "542755068590",
  appId: "1:542755068590:web:3489e2a584eca6ce98ab3f",
  measurementId: "G-86MLG8W019"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Analytics only works over https (not on file://), and isn't supported in every
// environment, so this is wrapped to avoid breaking auth if it can't load.
isSupported().then((ok) => { if (ok) getAnalytics(app); }).catch(() => {});

// Build an absolute URL to another page in this site, regardless of what
// subpath GitHub Pages serves the repo from.
export function siteUrl(page) {
  return new URL(page, window.location.href).toString();
}
