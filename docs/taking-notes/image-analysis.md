---
sidebar_position: 5
---

# Image analysis

Windi runs several image analysis workflows on your uploaded images to associate textual descriptions with them:

- **Text extraction**: Extract printed and handwritten text from images. Windi currently uses [AWS Textract](https://aws.amazon.com/textract/) for this, so there are a few limitations - for example, supported languages for printed text are English, Spanish, German, Italian, Portuguese, and French, and English is the only supported language for handwritten text.
- **Label detection**: Describe the image with a set of labels (e.g. "person", "tree", or "car"). Windi currently uses [AWS Rekognition](https://aws.amazon.com/rekognition/) for this.

The results of image analysis are indexed for search.
