# fullstack
Proyecto para Curso de Full Stack
Para sincronizar las máquinas con el contenido de fullstack:
teniendo un proyecto en un directorio (ej: ~/fullstack), si no se inicializó hacer:
( git init = crea un directorio .git en fullstack,
  git add remote ....
  git add -A
  git commit -m "comentario"
  git push origin master)
  
  o bien git clone ... al directorio donde quiero clonar mi proyecto
  
  si lo quiero actualizar:
  
  git pull origin master --rebase
  
  si quiero subir los cambios de mi dispositivo a github:
  
  git push origin master

Quick setup — if you’ve done this kind of thing before or HTTPS SSH

https://github.com/cgpera/fullstack.git

Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# fullstack" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/cgpera/fullstack.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/cgpera/fullstack.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
