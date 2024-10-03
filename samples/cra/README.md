## Test environment variables with Docker.

### Build and Run the Docker Image


1. **Build and Run the Docker Image**:

   To test how the environment variable is replaced during the build, you can run the following command:

   ```bash
   docker build --build-arg REACT_APP_APP_URL=https://production.com -t myapp:production .
   ```

   After the image is built, you can run the container:

   ```bash
   docker run -d -p 3000:80 myapp:production
   ```

2. **Check the application**:

   Open your browser and navigate to `http://localhost:3000`. You should see the `REACT_APP_APP_URL` showing as `https://production.com` because it was passed during the Docker build.

### Test Development

#### Development:
1. Run the application in development mode to see the `.env` variables:

   ```bash
   npm start
   ```

   Navigate to `http://localhost:3000` to see the values from `.env`.