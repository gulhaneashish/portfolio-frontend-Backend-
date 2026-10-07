# Use OpenJDK 17 (same as your local Java)
FROM eclipse-temurin:17-jdk-alpine

# Set working directory inside the container
WORKDIR /app

# Copy Maven wrapper and pom.xml first (for caching dependencies)

#COPY mvnw .
#COPY .mvn .mvn
#COPY pom.xml .

# Download dependencies (offline)

#RUN ./mvnw dependency:go-offline

# Copy the source code
#COPY src ./src

# Build the project (skip tests for faster build)
#RUN ./mvnw clean package -DskipTests

# Expose port 8080
#EXPOSE 8080

# Start the Spring Boot application
#CMD ["java", "-jar", "target/portfolioback-0.0.1-SNAPSHOT.jar"]