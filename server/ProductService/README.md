uploading image files on the front end side

Either use the enctype

<form action='/upload_files' enctype='multipart/form-data'>
...
</form>

or use the FormData

const form = new FormData()
form.append('name', "Dillion")
form.append('image', <a file>)


How to access images and videos

http://localhost:8001/uploads/images/your_image.jpg
http://localhost:8001/uploads/videos/your_video.mp4