# :snake: :colombia: Sitio Web de la Comunidad de Python Pereira

[![Build Status](https://img.shields.io/travis/pythonpereira/sitio-web/develop.svg?longCache=true&style=flat-square)](https://travis-ci.org/pythonpereira/sitio-web) [![Python](https://img.shields.io/badge/Python-%3E%3D3.5-blue.svg?longCache=true&style=flat-square)](https://www.python.org/)

Este es el repositorio del sitio web de la comunidad servido por
[Github](https://colombiapython.github.io/sitio-web-desarrollo/), y
construido utilizando [lektor](https://www.getlektor.com).

# Flujo de trabajo

Hay 2 ramas de git, `develop` y `production`.

## Develop

Es la rama por defecto y se despliega a través de gh-pages con Lektor a
https://pythonpereira.github.io/sitio-web-desarrollo/
(en http://develop.pypereira.co)

## Production

Después de que se han ejecutado las pruebas de calidad (QA), los cambios
realizados en la rama `develop` se unen con la rama `production` y son
desplegados a través de gh-pages con Lektor a 
https://pythonpereira.github.io/sitio-web-produccion/
(pronto en http://pypereira.co)

# Desarrollo local

## Instala Lektor

### Usando pip:
```
$ pip install -U Lektor
```

### Usando conda:

```
$ conda install lektor -c conda-forge
```

## Instala (reinstala) los `plugins` locales

```
$ lektor plugins reinstall
```

## Corre el servidor local

```
$ lektor server
```

## Problemas comunes

* Si en algun momento luego de instalar python3 y crear tu virtualenv. haces `lektor server` y ves este error:

```
RuntimeError: Click will abort further execution because Python 3 was configured to use ASCIas encoding for the environment.  Consult http://click.pocoo.org/python3/for mitigation steps.
```
Haz esto adentro de tu virtualenv:
```
export LC_ALL=en_us.UTF-8
export LANG=en_us.UTF-8
```

* Si ves `jinja2.exceptions.UndefinedError: 'estimate_reading_time' is undefined` significa que necesitas instalar o reinstalar los `plugins` de lektor. Puedes hacer esto ejecutando

```
$ lektor plugins reinstall
```

> Estructura basada en [Sitio Web Python Colombia](https://github.com/ColombiaPython/sitio-web)