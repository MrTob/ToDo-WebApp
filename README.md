  <h1 align="center">Simple ToDo-App📃:pencil2: - Mobile First</h1>

  <p align="center">
     a simple and light-weight web application for your ToDo's
    <br>
    <a href="https://github.com/MrTob/ToDo-WebApp/issues/new?template=bug.md">Report bug</a>
    ·
    <a href=https://github.com/MrTob/ToDo-WebApp/issues/new?template=feature.md&labels=feature">Request feature</a>
  </p>
</p>
<p align="center">
<img src="https://picr.eu/images/2020/11/14/2q4lF.gif" alt="drawing" width="200"/>
</p>
                                                                               
![GitHub top language](https://img.shields.io/github/languages/top/mrtob/ToDo-WebApp)
                 

## Table of contents


- [Demo](#demo)
- [Docker](#docker)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Copyright and license](#copyright-and-license)

## Demo
<iframe
  src="https://mrtob.github.io/ToDo-WebApp/"
  style="width:100%; height:300px;"
></iframe


## Docker
* Build image
  ```docker
  docker build -t <imageName> .
  ```

* Run Container
  ```docker
  docker run --name todoApp -p <port>:80 -d <imageName>
  ```

* The app should be available on localhost:<port>





## What's included
```text
Todo_Webapp/
├── dist/                       
│    └── css/                   
│         ├── style.min.css     
│         └── style.min.css.map 
├──js/                          
│   ├──main.js
│   ├──todoItem.js
│   └──todolist.js
├──sass/
│   ├──_base.scss
│   ├──_listContainer.scss
│   ├──_newTodoEntry.scss
│   ├──_sharedClasses.scss
│   └──style.scss
├──index.html
└──README.md
```

| File | Description |
|---|---|
|[README.md](README.md)|readme file|
|[index.html](index.html)|index html file|
|[style.min.css](./dist/css/style.min.css)  |   generated file from sass|
|[style.min.css.map](./dist/css/style.min.css.map)   |  generated file from sass |
|[main.js](./js/main.js)|main javascript file|
|[todoItem.js](./js/todoItem.js)| TodoItem Object|
|[todolist.js](./js/todolist.js)|list of TodoItem Objects|
|[_base.scss](./sass/_base.scss)|color definition|
|[_listContainer.scss](./sass/_listContainer.scss)|styling of all the ToDo's|
|[_newTodoEntry.scss](./sass/_newTodoEntry.scss)|sytling of the newToDo Field|
|[_sharedClasses.scss](./sass/_sharedClasses.scss)|button styling|
|[style.scss](./sass/style.scss)|import font|


## Bugs and feature requests

Have a bug or a feature request? Search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/MrTob/ToDo-WebApp/issues/new).

## Copyright and license
Code and documentation copyright 2020 the author. Code released under the [MIT License](LICENSE.md).


