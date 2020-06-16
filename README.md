# Mini Project: Photo App

## Setup environment 
### 1. Setup ReactJS App via Create React App

> Link: https://create-react-app.dev/docs/getting-started/

### 2. Add SCSS support

```js
npm i --save-dev node-sass
```

### 3. Add react router 

```
npm i --save react-router-dom
```

### 4. Add UI lib

```
npm i --save reactstrap
```


## Tổ chức folder

```
src
|__ assets
|  |__ images
|  |__ styles (global styles) 
|
|__ components (shared components)
|  |__ Header
|  |__ NotFound
|     |__ index.jsx
| 
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ Main
    |  |__ AddEdit
    |__ photoSlice.js
    |__ index.js
```

## Tổ chức routing

- Sử dụng kĩ thuật lazy load components.
- Load theo features.

```js
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photos" component={Photo} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
```

## Custom Field 

- Cầu nối giữa UI control và Formik.
- UI control là một controlled component với props: 
  - name: tên xác định control
  - value: giá trị của control
  - onChange: trigger hàm này với giá trị mới khi có thay đổi
  - onBlur: xác định khi nào thì control này bị touched

```js
function InputField(props) {
  const {
    field,
    type, label, placeholder, disabled,
  } = props;
  const { name } = field;
  // const { name, value, onChange, onBlur } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}
```

## Random Photo control

RandomPhoto
Props
  - name
  - imageUrl 
  - onImageUrlChange 
  - onRandomButtonBlur

RandomPhotoField

Formik

Yup

## Tech Stack Summary
React Stacks
  - Relative Import
    - jsconfig.json
  - Router
    - react router dom (npm i --save react-router-dom)
  - Design UI
    - bootstrap (npm i --save bootstrap)
    - reactstrap (npm i --save reactstrap)
    - formik: custom field (npm i --save formik)
    - react-select (npm i --save react-select)
    - scss (npm i --save-dev node-sass)
  - Validation form
    - yup: validate field (npm i --save yup)
  - For redux
    - Redux toolkit (npm i --save @reduxjs/toolkit)
    - Redux (npm i --save react-redux)