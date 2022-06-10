# API Backend for Konsult-in Apps

This is the documentation for performing the backend deployment of the konsult-in application

## Tech Stack

**Client:** Kotlin & Flutter

**Server:** Node, Express, MongoDB Atlas

**GCP Services:** Cloud Build, Cloud Run, Cloud SDK, Cloud Container Registry

## Deployment

In this deployment section, we will first create an image for the container

#### Clone the repo

```bash
  https://github.com/C22-PS008/cloud_computing.git
```

#### Go to the backend folder

```bash
  cd cloud_computing/backend/
```

#### Build the Image

```bash
  gcloud builds submit --tag gcr.io/<PROJECT ID>/<IMAGE NAME>:<TAG VERSION> .
```

![App Screenshot](https://raw.githubusercontent.com/C22-PS008/cloud_computing/main/deployment/img/1.jpg)
The picture above shows the image was successfully created

## Check Container Registry

Go to the Container registry to make sure the image is in the Registry
![App Screenshot](https://raw.githubusercontent.com/C22-PS008/cloud_computing/main/deployment/img/2.jpg)

## Cloud Run

Go to the Cloud Run menu then `Create Service`, then select the Container Image with the Container Image Registry have we created before. Create a name the service, and choose the region you want
![App Screenshot](https://raw.githubusercontent.com/C22-PS008/cloud_computing/main/deployment/img/3.jpg)

Select the CPU allocation and maximum instance needed according to what you want
![App Screenshot](https://raw.githubusercontent.com/C22-PS008/cloud_computing/main/deployment/img/4.PNG)

Click `Container, Variable, & Secret, Connection, Security` on the container port, set according to the port defined
![App Screenshot](https://raw.githubusercontent.com/C22-PS008/cloud_computing/main/deployment/img/5.PNG)

The image below shows that the backend service has been deployed. Use the URL listed to access the API Backend

![App Screenshot](https://raw.githubusercontent.com/C22-PS008/cloud_computing/main/deployment/img/6.jpg)

## Related

Here for documentation the Endpoint API and Test API

[API Spesification](https://github.com/C22-PS008/cloud_computing/blob/main/backend/README.md)

[POSTMAN API Client](https://documenter.getpostman.com/view/18595486/Uz5MGEoZ)

[PERFORMANCE TESTING] (./testing/Executive Summary - TEST API CAPSTONE PROJECT.pdf)
