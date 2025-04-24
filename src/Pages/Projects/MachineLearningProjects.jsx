import React from "react";
import "./ProjectsPage.css";

const mlProjectData = [
  // Beginner Level Projects
  {
    title: "Predict House Prices with Linear Regression",
    description: "Use a dataset like Boston Housing or similar to predict house prices based on features like area, rooms, etc.",
    level: "Beginner",
    type: "Fundamentals",
    link: "https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html", // Scikit-learn documentation for linear regression
  },
  {
    title: "Iris Flower Classification (Supervised Learning)",
    description: "Train a supervised learning model to classify the type of iris flower using the Iris dataset.",
    level: "Beginner",
    type: "Types of ML",
    link: "https://scikit-learn.org/stable/auto_examples/datasets/plot_iris_dataset.html", // Iris dataset classification example
  },
  {
    title: "Build a Confusion Matrix Visualizer for Classification Models",
    description: "Evaluate a classifier like Logistic Regression or Decision Trees using a confusion matrix and calculate metrics like precision, recall, and F1-score.",
    level: "Beginner",
    type: "Evaluation",
    link: "https://scikit-learn.org/stable/auto_examples/model_selection/plot_confusion_matrix.html", // Confusion matrix example
  },
  {
    title: "Optimize a Linear Regression Model with Cross-Validation",
    description: "Apply k-fold cross-validation to a regression model to improve its generalization performance.",
    level: "Beginner",
    type: "Model Optimization",
    link: "https://scikit-learn.org/stable/modules/cross_validation.html", // Cross-validation documentation
  },
  {
    title: "Clean and Preprocess Titanic Dataset",
    description: "Handle missing values, encode categorical features, and normalize data to prepare it for machine learning.",
    level: "Beginner",
    type: "Data Preparation",
    link: "https://www.kaggle.com/c/titanic/data", // Titanic dataset on Kaggle
  },
  {
    title: "Principal Component Analysis (PCA) on MNIST Dataset",
    description: "Reduce the dimensionality of the MNIST dataset and visualize the data in 2D space.",
    level: "Beginner",
    type: "Dimensionality",
    link: "https://scikit-learn.org/stable/modules/decomposition.html#pca", // PCA documentation
  },
  {
    title: "Implement K-Nearest Neighbors (KNN) from Scratch",
    description: "Build the KNN algorithm manually and test it on a simple dataset like Iris.",
    level: "Beginner",
    type: "Algorithms",
    link: "https://towardsdatascience.com/knn-from-scratch-python-5e5c7e52115b", // KNN from scratch tutorial
  },
  {
    title: "Tune Hyperparameters for a Decision Tree",
    description: "Optimize hyperparameters like max_depth and min_samples_split using GridSearchCV for a Decision Tree model.",
    level: "Beginner",
    type: "Parameter Optimization",
    link: "https://scikit-learn.org/stable/auto_examples/model_selection/plot_grid_search.html", // GridSearchCV example
  },

  // Intermediate Level Projects
  {
    title: "Predict Customer Churn with Logistic Regression",
    description: "Analyze a dataset to predict whether customers will churn (leave) based on features like usage and account status.",
    level: "Intermediate",
    type: "Fundamentals",
    link: "https://www.kaggle.com/blastchar/telco-customer-churn", // Telco Customer Churn dataset
  },
  {
    title: "Clustering Customer Segments (Unsupervised Learning)",
    description: "Use K-Means clustering to group customers into segments based on purchasing behavior.",
    level: "Intermediate",
    type: "Types of ML",
    link: "https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_digits.html", // K-Means clustering example
  },
  {
    title: "Evaluate a Random Forest Classifier for Fraud Detection",
    description: "Train and evaluate a Random Forest model for fraud detection using metrics like ROC-AUC and confusion matrix.",
    level: "Intermediate",
    type: "Evaluation",
    link: "https://scikit-learn.org/stable/auto_examples/ensemble/plot_forest_importances.html", // Random Forest documentation
  },
  {
    title: "Implement Early Stopping in Neural Networks",
    description: "Use early stopping to prevent overfitting in a TensorFlow or PyTorch neural network model.",
    level: "Intermediate",
    type: "Model Optimization",
    link: "https://keras.io/api/callbacks/early_stopping/", // Early stopping in Keras
  },
  {
    title: "Build a Data Pipeline for a Real-World Dataset",
    description: "Automate data cleaning, preprocessing, and feature engineering using a pipeline.",
    level: "Intermediate",
    type: "Data Preparation",
    link: "https://scikit-learn.org/stable/modules/compose.html", // Pipeline example
  },
  {
    title: "Feature Selection for a Classification Task",
    description: "Use techniques like Recursive Feature Elimination (RFE) or Mutual Information to select the most relevant features.",
    level: "Intermediate",
    type: "Dimensionality",
    link: "https://scikit-learn.org/stable/auto_examples/feature_selection/plot_rfe_digits.html", // RFE example
  },
  {
    title: "Implement Support Vector Machines (SVM) for Sentiment Analysis",
    description: "Train an SVM model on a sentiment dataset to classify positive and negative reviews.",
    level: "Intermediate",
    type: "Algorithms",
    link: "https://scikit-learn.org/stable/auto_examples/svm/plot_svm.html", // SVM documentation
  },
  {
    title: "Grid Search for Hyperparameter Tuning of Gradient Boosting",
    description: "Optimize parameters like learning rate and number of estimators for Gradient Boosting.",
    level: "Intermediate",
    type: "Parameter Optimization",
    link: "https://scikit-learn.org/stable/auto_examples/ensemble/plot_gradient_boosting_regression.html", // Gradient Boosting
  },

  // Advanced Level Projects
  {
    title: "Build an Image Classification Model from Scratch",
    description: "Build and train a deep learning model for image classification using a dataset like CIFAR-10.",
    level: "Advanced",
    type: "Fundamentals",
    link: "https://www.tensorflow.org/tutorials/images/cnn", // TensorFlow CNN tutorial
  },
  {
    title: "Reinforcement Learning for a Simple Game",
    description: "Implement a reinforcement learning agent to play a game like CartPole.",
    level: "Advanced",
    type: "Types of ML",
    link: "https://gym.openai.com/docs/", // OpenAI Gym documentation
  },
  {
    title: "Fine-Tune a Pretrained Neural Network",
    description: "Use transfer learning to fine-tune a pretrained model like ResNet or BERT for a custom dataset.",
    level: "Advanced",
    type: "Model Optimization",
    link: "https://keras.io/guides/transfer_learning/", // Transfer learning guide
  },
  {
    title: "Perform t-SNE on High-Dimensional Data",
    description: "Use t-SNE for dimensionality reduction and visualize clusters in high-dimensional data.",
    level: "Advanced",
    type: "Dimensionality",
    link: "https://scikit-learn.org/stable/auto_examples/manifold/plot_t_sne.html", // t-SNE documentation
  },
];

const MachineLearningProjects = () => {
  return (
    <div className="projects-page">
      <div className="banner">
        <h1>Machine Learning Project Ideas</h1>
        <p>Explore exciting hands-on projects to build your skills at every level.</p>
      </div>
      <div className="projects-grid">
        {mlProjectData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <div className="project-header">
              <h2>{project.title}</h2>
              <span className={`level-badge ${project.level.toLowerCase()}`}>
                {project.level}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-footer">
              <span className="type-badge">{project.type}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MachineLearningProjects;
