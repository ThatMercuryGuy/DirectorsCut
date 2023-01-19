# DirectorsCut
AI Hairstyle Transformation Toolkit. Utilises DNN from the Barbershop Research Project. https://zpdesu.github.io/Barbershop/

A front-end has been implemented to feed input images into a script which calls multiple functions from the Barbershop Project. One can take a picture of themselves
via their webcam feed (integrated into the webpage), choose their hairstyle of choice from various samples, set certain parameters related to Blending
and voila! After a quick processing a picture of the AI-generated makeover will be complete!

Using PIL Image (Python Module) The picture is automatically cropped to 1024x1024 (from 1920x1080) capturing the centre of the picture taken.

![System Design](https://user-images.githubusercontent.com/79685762/213451018-742dab12-6cf6-4619-b331-8919be8c3534.png)
