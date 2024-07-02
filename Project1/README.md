# AR Project with Direct Model Placement Using 2D Buttons

This project demonstrates ability that allows users to place and interact with 3D models using 2d buttons in real-world environments using Blippar's WebAR SDK.

## Features

- Surface tracking for placing 3D models in the real world
- Three pre-loaded 3D models that can be switched between
- Model animation and interaction
- Loading indicator for model changes
- Error handling for model loading issues

## Technologies Used

- A-Frame (v1.3.0)
- WebAR SDK (v2.0.1)
- Draco 3D data compression
- aframe-extras for animation-mixer

## Setup

1. Ensure you have the WebAR SDK file (`webar-sdk-v2.0.1.min.js`) in the correct directory (`../webar-sdk/`).
2. Place your 3D model files in the `../models/` directory as referenced in the HTML file.
3. Replace the placeholder WebAR license key (`xxxxxxxx-1111-2222-3333-yyyyyyyyyyyy`) with your actual key.

## Usage

Open the HTML file in a WebAR-compatible browser on a device with AR capabilities. Use the buttons at the bottom of the screen to switch between different 3D models.

## Customization

You can customize the project by:
- Adding or replacing 3D models in the `<a-assets>` section
- Modifying the `modelConfigs` object to adjust scale, rotation, and animation clips for each model
- Adjusting the WebAR SDK parameters in the script tag to change AR behavior

## Note

This project requires a valid WebAR SDK key and appropriate 3D model files to function correctly.