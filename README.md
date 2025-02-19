# Instalación de ERPNext version 14 en Ubuntu 22.04

Este documento describe los pasos para instalar Frappe en Ubuntu 22.04, incluyendo la configuración del modo developer.

## Requisitos Previos

Antes de comenzar, asegúrate de que tu sistema está actualizado:

```bash
sudo apt update && sudo apt upgrade -y
```

Instala las dependencias necesarias:

```bash
sudo apt install -y python3-dev python3-pip python3-venv redis-server curl git mariadb-server xvfb libfontconfig wkhtmltopdf
```

## Instalación de `curl`

Si `curl` no está instalado, instálalo con:

```bash
sudo apt install curl -y
```

## Instalación de Node.js 16 y npm

Frappe requiere una versión específica de Node.js. Instalaremos Node.js 16:

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```

Verifica la instalación:

```bash
node -v
npm -v
```

## Instalación de Yarn

```bash
npm install -g yarn
```

## Instalación de Redis

Redis ya se instaló en los requisitos previos, pero puedes verificar su estado:

```bash
sudo systemctl enable redis
sudo systemctl start redis
```

## Configuración de MariaDB

Configura MariaDB con el siguiente comando interactivo:

```bash
sudo mysql_secure_installation
```

Entra a MariaDB y ajusta las configuraciones necesarias:

```bash
sudo mysql -u root -p
```

Ejecuta lo siguiente dentro de MariaDB:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'tu_contraseña_segura';
FLUSH PRIVILEGES;
EXIT;
```

## Instalación de Frappe Bench

Clona e instala Bench:

```bash
pip3 install frappe-bench
bench --version
```

## Creación del Entorno de Frappe

```bash
bench init --frappe-branch version-14 frappe-bench
cd frappe-bench
```

## Creación de un Sitio en Frappe

```bash
bench new-site mi-sitio.local --admin-password admin --mariadb-root-password tu_contraseña_segura
```

## Instalación de una Aplicación en Frappe

Por ejemplo, para instalar `erpnext`:

```bash
bench get-app erpnext --branch version-14
bench --site mi-sitio.local install-app erpnext
```

## Activación del Modo Developer

Para habilitar el modo developer en Frappe, edita el archivo de configuración del sitio:

```bash
nano sites/mi-sitio.local/site_config.json
```

Agrega la siguiente línea antes del último corchete:

```json
"developer_mode": 1
```

Guarda el archivo y reinicia Frappe:

```bash
bench restart
```

## Iniciar el Servidor

Para ejecutar Frappe, usa:

```bash
bench start
```

Ahora puedes acceder a tu sitio en `http://localhost:8000` con las credenciales de administrador que configuraste.

---

Con esto, Frappe está instalado y listo para su uso en modo developer en Ubuntu 22.04. 🎉

## Tutorial de instalación 

https://codewithkarani.com/2023/12/31/how-to-install-erpnext-version-15-in-ubuntu-a-step-by-step-guide/

## Tutorial de aprendizaje ERPNext

https://www.youtube.com/watch?v=QHnQgr_0f1k&list=PL81DRyBlXws97QY57jlUhJxMp3mNa-qUl
