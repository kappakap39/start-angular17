
# Angular 17 Project Setup

## 1. Install Angular CLI 17 globally
To install Angular CLI 17 globally on your system:

```bash
npm install -g @angular/cli@17
```

## 2. Install Dependencies in Project

### 2.1 Install Angular Material, CDK, and Animations
In the project directory, install the required Angular Material dependencies:

```bash
npm install @angular/material@17 @angular/cdk@17 @angular/animations@17
```

### 2.2 Install Axios and SweetAlert2 and jwt-decode
```bash
npm install axios
npm install sweetalert2
npm install jwt-decode

```

### 2.3 Install Nodemon as Dev Dependency
```bash
npm install --save-dev nodemon
```

### 2.4 Install jQuery Types
```bash
npm install @types/jquery
```

### 2.5 Bootstrap
Add **Bootstrap** in your project:
```bash
npm install bootstrap
npm install bootstrap-icons
```

## 3. Configure `angular.json`

### 3.1 Add Bootstrap CSS and JS
In `angular.json`, add the following under the `"styles"` and `"scripts"` arrays:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

## 4. Import Angular Material Theme in `styles.scss`

In `src/styles.scss`, add the following to import the Material theme:

```scss
@import '@angular/material/prebuilt-themes/indigo-pink.css';
```

## 5. Add `provideAnimations()` in `app.config.ts`

In `app.config.ts`, add the `provideAnimations()`:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations()],
};
```

## 6. Main Application Setup in `main.ts`

In `main.ts`, ensure that `appConfig` is used as follows:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig);
```

## 7. Conclusion
Now, your Angular 17 project is configured with Angular Material, Bootstrap, Axios, SweetAlert2, jQuery, and Nodemon. You can use jQuery in your Angular components for DOM manipulation, but be mindful of how it interacts with Angular’s Change Detection system.
