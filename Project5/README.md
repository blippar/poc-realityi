# AR Dinosaur Model Placement Project

This project demonstrates a basic Augmented Reality (AR) application that places a 3D Dinosaur model in real-world environments using Blippar's WebAR SDK.

## Project Highlight

The main feature of this project is the placement of a 3D Wolf model in AR:
- The model (dino-6.glb) is loaded and displayed in the AR scene.
- The Dino model is animated with all available animation clips.
- Users can interact with the model using gestures for rotation and scaling.

## Features

- Surface tracking for placing the 3D Wolf model in the real world
- Model animation and interaction
- Custom environment setup for desktop viewing
- Camera permissions handling
- Loading progress display
- Guide view for user instruction

## Technologies Used

- A-Frame (v1.3.0)
- Blippar WebAR SDK (v2.0.1)
- Draco 3D data compression
- aframe-extras for animation-mixer
- aframe-environment-component for desktop environment

## Setup

1. Ensure you have the WebAR SDK file (`webar-sdk-v2.0.2-rc1.min.js`) in the correct directory (`../webar-sdk/`).
2. Place the Wolf model file (dino-6.glb) in the `../models/` directory.
3. Replace the placeholder WebAR license key (`xxxxxxxx-1111-2222-3333-yyyyyyyyyyyy`) with your actual Blippar license key.

## Usage

Open the HTML file in a WebAR-compatible browser on a device with AR capabilities. The Wolf model will be placed in the real world environment once a surface is detected.

## Customization

You can customize the project by:
- Replacing the Wolf model with another 3D model
- Adjusting the model's scale, rotation, and animation in the HTML file
- Modifying the WebAR SDK parameters in the script tag to change AR behavior

## Note

This project requires a valid Blippar WebAR SDK license key to function correctly.