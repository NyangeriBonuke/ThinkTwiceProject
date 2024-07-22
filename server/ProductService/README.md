uploading image files on the front end side

Either use the enctype

<form action='/upload_files' enctype='multipart/form-data'>
...
</form>

or use the FormData

const form = new FormData()
form.append('name', "Dillion")
form.append('image', <a file>)