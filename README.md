# The Directors Cut
A real-time Hairstyle Transformation Toolkit, enabling a novel usecase for Generative AI.
Utilises a DNN developed by the Barbershop Research Project - https://zpdesu.github.io/Barbershop/

The system comprises of a frontend module implmenenting a browser-based UX, and backend module that performs control sequencing and data I/O between the CPU and GPU-hosted component (DNN). The PIL Image Python module is used for image preprocessing: the input picture is automatically cropped to 1024x1024 from 1920x1080 keeping the subject in the center of the frame.

The software design is depicted in the figure below.

Usage:

Step1: The user takes a picture of themselves via their webcam feed (integrated into the web-based UI).
Step2: Choose their target hairstyle from among the presented options, and select certain configurable parameters related to Blending
Step3: Launch the transform processing sequence.

In a short while, the output image showing the user's AI-generated makeover is displayed!


![System Design](https://user-images.githubusercontent.com/79685762/213451018-742dab12-6cf6-4619-b331-8919be8c3534.png)
