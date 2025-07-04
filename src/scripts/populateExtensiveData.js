/**
 * Script to populate the database with extensive data
 */

import mongoose from "mongoose";
import { User } from "../models/User.js";
import { Goal } from "../models/LearningGoal.js";
import { Assessment } from "../models/Assessment.js";
import { Quiz } from "../models/Quiz.js";
import { LearnerProfile } from "../models/LearnerProfile.js";
import { Pathway } from "../models/Pathway.js";
import { logger } from "../utils/logger.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB for extensive data population");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

// Données étendues pour les objectifs
const EXTENSIVE_GOALS = [
  {
    title: "Fondamentaux du Machine Learning",
    description:
      "Maîtrisez les concepts de base du machine learning avec une approche pratique et théorique solide.",
    category: "ml",
    level: "beginner",
    estimatedDuration: 8,
    prerequisites: [
      {
        category: "math",
        skills: [
          { name: "Algèbre linéaire", level: "basic" },
          { name: "Statistiques", level: "basic" },
        ],
      },
      {
        category: "programming",
        skills: [{ name: "Python", level: "basic" }],
      },
    ],
    modules: [
      {
        title: "Introduction au Machine Learning",
        description:
          "Découvrez les concepts fondamentaux et les types d'apprentissage automatique",
        duration: 15,
        skills: [
          { name: "Concepts ML", level: "basic" },
          { name: "Types d'apprentissage", level: "basic" },
        ],
        resources: [
          {
            title: "Introduction to Machine Learning",
            url: "https://www.coursera.org/learn/machine-learning",
            type: "course",
            duration: 180,
          },
          {
            title: "Machine Learning Basics",
            url: "https://towardsdatascience.com/machine-learning-basics",
            type: "article",
            duration: 45,
          },
          {
            title: "ML Fundamentals Video",
            url: "https://www.youtube.com/watch?v=aircAruvnKk",
            type: "video",
            duration: 60,
          },
        ],
        validationCriteria: [
          "Comprendre les différents types d'apprentissage",
          "Identifier les cas d'usage appropriés",
          "Connaître le vocabulaire de base",
        ],
      },
      {
        title: "Algorithmes de Classification",
        description:
          "Apprenez les algorithmes de classification les plus utilisés",
        duration: 25,
        skills: [
          { name: "Classification", level: "intermediate" },
          { name: "Évaluation de modèles", level: "basic" },
        ],
        resources: [
          {
            title: "Classification Algorithms Guide",
            url: "https://scikit-learn.org/stable/supervised_learning.html",
            type: "article",
            duration: 90,
          },
          {
            title: "Hands-on Classification",
            url: "https://www.kaggle.com/learn/intro-to-machine-learning",
            type: "use_case",
            duration: 120,
          },
        ],
        validationCriteria: [
          "Implémenter un classificateur simple",
          "Évaluer les performances d'un modèle",
          "Comprendre les métriques de classification",
        ],
      },
      {
        title: "Algorithmes de Régression",
        description:
          "Maîtrisez les techniques de régression pour prédire des valeurs continues",
        duration: 20,
        skills: [
          { name: "Régression", level: "intermediate" },
          { name: "Optimisation", level: "basic" },
        ],
        resources: [
          {
            title: "Linear Regression Deep Dive",
            url: "https://www.analyticsvidhya.com/blog/2021/10/everything-about-linear-regression/",
            type: "article",
            duration: 75,
          },
          {
            title: "Regression Analysis Course",
            url: "https://www.edx.org/course/introduction-to-linear-models-and-matrix-algebra",
            type: "course",
            duration: 150,
          },
        ],
        validationCriteria: [
          "Implémenter une régression linéaire",
          "Comprendre les métriques de régression",
          "Analyser la qualité d'un modèle",
        ],
      },
    ],
    careerOpportunities: [
      {
        title: "Data Scientist Junior",
        description: "Analyste de données avec focus sur le machine learning",
        averageSalary: "45-65k€/an",
        companies: ["Orange", "Sonatel", "Expresso", "Startups Tech"],
      },
      {
        title: "ML Engineer",
        description:
          "Développeur spécialisé dans l'implémentation de modèles ML",
        averageSalary: "50-75k€/an",
        companies: ["Fintech locales", "Banques", "Assurances"],
      },
    ],
    certification: {
      available: true,
      name: "Certificat ML Fondamentaux",
      provider: "UCAD AI Center",
      url: "https://ucad.sn/certifications/ml-fundamentals",
    },
  },

  {
    title: "Deep Learning Avancé",
    description:
      "Plongez dans les architectures de réseaux de neurones profonds et leurs applications modernes.",
    category: "dl",
    level: "advanced",
    estimatedDuration: 16,
    prerequisites: [
      {
        category: "math",
        skills: [
          { name: "Calcul différentiel", level: "intermediate" },
          { name: "Algèbre linéaire", level: "advanced" },
        ],
      },
      {
        category: "programming",
        skills: [
          { name: "Python", level: "advanced" },
          { name: "TensorFlow/PyTorch", level: "intermediate" },
        ],
      },
    ],
    modules: [
      {
        title: "Architectures de Réseaux de Neurones",
        description:
          "Comprenez les différentes architectures et leur utilisation",
        duration: 30,
        skills: [
          { name: "CNN", level: "advanced" },
          { name: "RNN", level: "advanced" },
          { name: "Transformers", level: "intermediate" },
        ],
        resources: [
          {
            title: "Deep Learning Specialization",
            url: "https://www.coursera.org/specializations/deep-learning",
            type: "course",
            duration: 300,
          },
          {
            title: "Neural Networks and Deep Learning",
            url: "http://neuralnetworksanddeeplearning.com/",
            type: "book",
            duration: 400,
          },
        ],
        validationCriteria: [
          "Implémenter un CNN from scratch",
          "Comprendre la rétropropagation",
          "Optimiser les hyperparamètres",
        ],
      },
      {
        title: "Techniques d'Optimisation",
        description:
          "Maîtrisez les techniques avancées d'optimisation pour l'entraînement",
        duration: 25,
        skills: [
          { name: "Optimisation", level: "advanced" },
          { name: "Régularisation", level: "intermediate" },
        ],
        resources: [
          {
            title: "Optimization for Deep Learning",
            url: "https://arxiv.org/abs/1912.13213",
            type: "article",
            duration: 120,
          },
        ],
        validationCriteria: [
          "Implémenter différents optimiseurs",
          "Comprendre les techniques de régularisation",
          "Diagnostiquer les problèmes d'entraînement",
        ],
      },
    ],
    careerOpportunities: [
      {
        title: "Deep Learning Engineer",
        description: "Spécialiste en développement de modèles de deep learning",
        averageSalary: "70-120k€/an",
        companies: ["Google", "Meta", "Microsoft", "Startups IA"],
      },
      {
        title: "Research Scientist",
        description: "Chercheur en intelligence artificielle",
        averageSalary: "80-150k€/an",
        companies: ["Universités", "Centres de recherche", "Labs industriels"],
      },
    ],
    certification: {
      available: true,
      name: "Certificat Deep Learning Expert",
      provider: "UCAD AI Research Lab",
      url: "https://ucad.sn/certifications/deep-learning-expert",
    },
  },

  {
    title: "Computer Vision Pratique",
    description:
      "Développez des applications de vision par ordinateur pour résoudre des problèmes réels.",
    category: "computer_vision",
    level: "intermediate",
    estimatedDuration: 12,
    prerequisites: [
      {
        category: "programming",
        skills: [
          { name: "Python", level: "intermediate" },
          { name: "OpenCV", level: "basic" },
        ],
      },
      {
        category: "theory",
        skills: [{ name: "Deep Learning", level: "basic" }],
      },
    ],
    modules: [
      {
        title: "Traitement d'Images Fondamental",
        description: "Apprenez les bases du traitement d'images numériques",
        duration: 20,
        skills: [
          { name: "Traitement d'images", level: "intermediate" },
          { name: "OpenCV", level: "intermediate" },
        ],
        resources: [
          {
            title: "Computer Vision Course",
            url: "https://www.udacity.com/course/computer-vision-nanodegree--nd891",
            type: "course",
            duration: 200,
          },
          {
            title: "OpenCV Python Tutorial",
            url: "https://opencv-python-tutroals.readthedocs.io/",
            type: "article",
            duration: 150,
          },
        ],
        validationCriteria: [
          "Manipuler des images avec OpenCV",
          "Appliquer des filtres et transformations",
          "Détecter des contours et formes",
        ],
      },
      {
        title: "Détection et Reconnaissance d'Objets",
        description: "Implémentez des systèmes de détection d'objets modernes",
        duration: 35,
        skills: [
          { name: "Détection d'objets", level: "advanced" },
          { name: "YOLO", level: "intermediate" },
          { name: "R-CNN", level: "intermediate" },
        ],
        resources: [
          {
            title: "Object Detection with YOLO",
            url: "https://pjreddie.com/darknet/yolo/",
            type: "article",
            duration: 90,
          },
          {
            title: "Practical Object Detection",
            url: "https://www.kaggle.com/learn/computer-vision",
            type: "use_case",
            duration: 180,
          },
        ],
        validationCriteria: [
          "Entraîner un modèle YOLO",
          "Évaluer les performances de détection",
          "Déployer un système de détection",
        ],
      },
    ],
    careerOpportunities: [
      {
        title: "Computer Vision Engineer",
        description: "Développeur spécialisé en vision par ordinateur",
        averageSalary: "60-95k€/an",
        companies: ["Tesla", "Uber", "Startups Automotive", "Sécurité"],
      },
    ],
    certification: {
      available: true,
      name: "Certificat Computer Vision",
      provider: "UCAD Engineering",
      url: "https://ucad.sn/certifications/computer-vision",
    },
  },

  {
    title: "NLP et Traitement du Langage",
    description:
      "Maîtrisez le traitement automatique du langage naturel et les modèles de langage modernes.",
    category: "nlp",
    level: "intermediate",
    estimatedDuration: 14,
    prerequisites: [
      {
        category: "programming",
        skills: [
          { name: "Python", level: "intermediate" },
          { name: "NLTK/spaCy", level: "basic" },
        ],
      },
    ],
    modules: [
      {
        title: "Fondamentaux du NLP",
        description:
          "Découvrez les techniques de base du traitement du langage",
        duration: 25,
        skills: [
          { name: "Tokenisation", level: "intermediate" },
          { name: "Analyse syntaxique", level: "basic" },
          { name: "Word embeddings", level: "intermediate" },
        ],
        resources: [
          {
            title: "Natural Language Processing with Python",
            url: "https://www.nltk.org/book/",
            type: "book",
            duration: 300,
          },
          {
            title: "NLP Course",
            url: "https://www.coursera.org/learn/language-processing",
            type: "course",
            duration: 250,
          },
        ],
        validationCriteria: [
          "Préprocesser du texte efficacement",
          "Implémenter des embeddings",
          "Analyser la sentiment",
        ],
      },
      {
        title: "Modèles de Langage Modernes",
        description: "Explorez BERT, GPT et les transformers",
        duration: 30,
        skills: [
          { name: "Transformers", level: "advanced" },
          { name: "BERT", level: "intermediate" },
          { name: "Fine-tuning", level: "intermediate" },
        ],
        resources: [
          {
            title: "Hugging Face Course",
            url: "https://huggingface.co/course",
            type: "course",
            duration: 200,
          },
          {
            title: "Attention Is All You Need",
            url: "https://arxiv.org/abs/1706.03762",
            type: "article",
            duration: 90,
          },
        ],
        validationCriteria: [
          "Fine-tuner un modèle BERT",
          "Comprendre l'architecture Transformer",
          "Évaluer des modèles de langage",
        ],
      },
    ],
    careerOpportunities: [
      {
        title: "NLP Engineer",
        description: "Spécialiste en traitement automatique du langage",
        averageSalary: "65-100k€/an",
        companies: ["Google", "Amazon", "Chatbot companies", "Fintech"],
      },
    ],
    certification: {
      available: true,
      name: "Certificat NLP Specialist",
      provider: "UCAD Linguistics AI",
      url: "https://ucad.sn/certifications/nlp-specialist",
    },
  },

  {
    title: "MLOps et Déploiement",
    description:
      "Apprenez à déployer et maintenir des modèles ML en production à grande échelle.",
    category: "mlops",
    level: "advanced",
    estimatedDuration: 10,
    prerequisites: [
      {
        category: "programming",
        skills: [
          { name: "Python", level: "advanced" },
          { name: "Docker", level: "intermediate" },
          { name: "Git", level: "intermediate" },
        ],
      },
      {
        category: "tools",
        skills: [
          { name: "Cloud platforms", level: "basic" },
          { name: "CI/CD", level: "basic" },
        ],
      },
    ],
    modules: [
      {
        title: "Pipeline ML et Versioning",
        description: "Construisez des pipelines ML robustes et reproductibles",
        duration: 25,
        skills: [
          { name: "MLflow", level: "intermediate" },
          { name: "DVC", level: "intermediate" },
          { name: "Pipeline automation", level: "advanced" },
        ],
        resources: [
          {
            title: "MLOps Specialization",
            url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
            type: "course",
            duration: 300,
          },
          {
            title: "MLflow Documentation",
            url: "https://mlflow.org/docs/latest/index.html",
            type: "article",
            duration: 120,
          },
        ],
        validationCriteria: [
          "Créer un pipeline ML complet",
          "Versionner modèles et données",
          "Automatiser l'entraînement",
        ],
      },
      {
        title: "Déploiement et Monitoring",
        description:
          "Déployez des modèles en production et surveillez leurs performances",
        duration: 30,
        skills: [
          { name: "Kubernetes", level: "intermediate" },
          { name: "Model serving", level: "advanced" },
          { name: "Monitoring", level: "intermediate" },
        ],
        resources: [
          {
            title: "Kubernetes for ML",
            url: "https://kubernetes.io/docs/tutorials/",
            type: "article",
            duration: 180,
          },
          {
            title: "Model Deployment Best Practices",
            url: "https://neptune.ai/blog/model-deployment-best-practices",
            type: "article",
            duration: 75,
          },
        ],
        validationCriteria: [
          "Déployer un modèle sur Kubernetes",
          "Mettre en place du monitoring",
          "Gérer les mises à jour de modèles",
        ],
      },
    ],
    careerOpportunities: [
      {
        title: "MLOps Engineer",
        description: "Spécialiste en infrastructure et déploiement ML",
        averageSalary: "75-130k€/an",
        companies: ["Netflix", "Spotify", "Uber", "Airbnb"],
      },
    ],
    certification: {
      available: true,
      name: "Certificat MLOps Professional",
      provider: "UCAD DevOps Center",
      url: "https://ucad.sn/certifications/mlops-professional",
    },
  },
];

// Questions d'évaluation étendues
const EXTENSIVE_ASSESSMENT_QUESTIONS = {
  math: [
    {
      text: "Quelle est la dérivée de f(x) = x³ + 2x² - 5x + 3 ?",
      options: [
        { text: "3x² + 4x - 5", isCorrect: true },
        { text: "x³ + 4x - 5", isCorrect: false },
        { text: "3x² + 2x - 5", isCorrect: false },
        { text: "3x + 4x - 5", isCorrect: false },
      ],
      difficulty: "intermediate",
      explanation:
        "La dérivée de x³ est 3x², de 2x² est 4x, de -5x est -5, et la dérivée d'une constante est 0.",
    },
    {
      text: "Dans une distribution normale, quel pourcentage des données se trouve dans un écart-type de la moyenne ?",
      options: [
        { text: "68%", isCorrect: true },
        { text: "95%", isCorrect: false },
        { text: "99.7%", isCorrect: false },
        { text: "50%", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "La règle empirique (68-95-99.7) indique que 68% des données se trouvent dans un écart-type de la moyenne.",
    },
    {
      text: "Quelle est la valeur propre dominante de la matrice [[3, 1], [0, 2]] ?",
      options: [
        { text: "3", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "1", isCorrect: false },
      ],
      difficulty: "advanced",
      explanation:
        "Pour une matrice triangulaire, les valeurs propres sont les éléments diagonaux. La plus grande est 3.",
    },
  ],

  programming: [
    {
      text: "Quelle est la complexité temporelle de l'algorithme de tri fusion (merge sort) dans le pire cas ?",
      options: [
        { text: "O(n log n)", isCorrect: true },
        { text: "O(n²)", isCorrect: false },
        { text: "O(n)", isCorrect: false },
        { text: "O(log n)", isCorrect: false },
      ],
      difficulty: "intermediate",
      explanation:
        "Le tri fusion divise récursivement le tableau (log n niveaux) et fusionne en O(n) à chaque niveau.",
    },
    {
      text: "Que fait cette fonction Python : lambda x: x**2 ?",
      options: [
        { text: "Calcule le carré de x", isCorrect: true },
        { text: "Calcule la racine carrée de x", isCorrect: false },
        { text: "Calcule 2 puissance x", isCorrect: false },
        { text: "Multiplie x par 2", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "L'opérateur ** en Python représente l'exponentiation, donc x**2 calcule x au carré.",
    },
    {
      text: "Quelle structure de données utilise le principe LIFO ?",
      options: [
        { text: "Pile (Stack)", isCorrect: true },
        { text: "File (Queue)", isCorrect: false },
        { text: "Liste chaînée", isCorrect: false },
        { text: "Arbre binaire", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "LIFO signifie Last In First Out, caractéristique principale des piles.",
    },
  ],

  ml: [
    {
      text: "Qu'est-ce que l'overfitting en machine learning ?",
      options: [
        {
          text: "Quand le modèle mémorise les données d'entraînement mais généralise mal",
          isCorrect: true,
        },
        { text: "Quand le modèle est trop simple", isCorrect: false },
        { text: "Quand les données sont insuffisantes", isCorrect: false },
        { text: "Quand l'algorithme converge trop vite", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "L'overfitting se produit quand le modèle s'adapte trop aux données d'entraînement et perd sa capacité de généralisation.",
    },
    {
      text: "Quelle est la différence entre classification et régression ?",
      options: [
        {
          text: "Classification: variables catégorielles, Régression: variables continues",
          isCorrect: true,
        },
        {
          text: "Classification: supervisé, Régression: non-supervisé",
          isCorrect: false,
        },
        { text: "Aucune différence", isCorrect: false },
        {
          text: "Classification: linéaire, Régression: non-linéaire",
          isCorrect: false,
        },
      ],
      difficulty: "basic",
      explanation:
        "La classification prédit des catégories/classes, la régression prédit des valeurs numériques continues.",
    },
    {
      text: "Qu'est-ce que la validation croisée ?",
      options: [
        {
          text: "Une technique pour évaluer la performance d'un modèle en divisant les données",
          isCorrect: true,
        },
        { text: "Une méthode de nettoyage des données", isCorrect: false },
        { text: "Un algorithme d'optimisation", isCorrect: false },
        { text: "Une technique de feature engineering", isCorrect: false },
      ],
      difficulty: "intermediate",
      explanation:
        "La validation croisée divise les données en k-folds pour entraîner et tester le modèle plusieurs fois.",
    },
  ],

  dl: [
    {
      text: "Qu'est-ce que la rétropropagation ?",
      options: [
        {
          text: "L'algorithme pour calculer les gradients dans un réseau de neurones",
          isCorrect: true,
        },
        { text: "Une technique de régularisation", isCorrect: false },
        { text: "Un type d'activation", isCorrect: false },
        { text: "Une méthode d'initialisation", isCorrect: false },
      ],
      difficulty: "intermediate",
      explanation:
        "La rétropropagation calcule les gradients en propageant l'erreur de la sortie vers l'entrée.",
    },
    {
      text: "Quelle est la fonction d'activation la plus utilisée actuellement ?",
      options: [
        { text: "ReLU", isCorrect: true },
        { text: "Sigmoid", isCorrect: false },
        { text: "Tanh", isCorrect: false },
        { text: "Linear", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "ReLU (Rectified Linear Unit) est populaire car elle évite le problème de gradient vanishing.",
    },
    {
      text: "Qu'est-ce qu'un CNN ?",
      options: [
        { text: "Convolutional Neural Network", isCorrect: true },
        { text: "Cascading Neural Network", isCorrect: false },
        { text: "Continuous Neural Network", isCorrect: false },
        { text: "Circular Neural Network", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "CNN utilise des couches de convolution pour traiter des données avec une structure spatiale comme les images.",
    },
  ],

  computer_vision: [
    {
      text: "Qu'est-ce qu'une convolution en traitement d'image ?",
      options: [
        {
          text: "Une opération qui applique un filtre sur une image",
          isCorrect: true,
        },
        { text: "Une technique de compression", isCorrect: false },
        { text: "Un algorithme de segmentation", isCorrect: false },
        { text: "Une méthode de détection de contours", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "La convolution applique un noyau (kernel) sur l'image pour extraire des caractéristiques.",
    },
    {
      text: "Qu'est-ce que la détection d'objets ?",
      options: [
        {
          text: "Localiser et classifier des objets dans une image",
          isCorrect: true,
        },
        { text: "Classifier une image entière", isCorrect: false },
        { text: "Segmenter une image en régions", isCorrect: false },
        { text: "Améliorer la qualité d'une image", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "La détection d'objets combine localisation (où) et classification (quoi) des objets.",
    },
    {
      text: "Qu'est-ce que YOLO ?",
      options: [
        {
          text: "You Only Look Once - un algorithme de détection d'objets",
          isCorrect: true,
        },
        { text: "Un type de réseau de neurones", isCorrect: false },
        { text: "Une technique de segmentation", isCorrect: false },
        { text: "Un format d'image", isCorrect: false },
      ],
      difficulty: "intermediate",
      explanation:
        "YOLO est un algorithme de détection d'objets en temps réel qui traite l'image en une seule passe.",
    },
  ],

  nlp: [
    {
      text: "Qu'est-ce que la tokenisation ?",
      options: [
        { text: "Diviser un texte en unités plus petites", isCorrect: true },
        { text: "Traduire un texte", isCorrect: false },
        { text: "Analyser la grammaire", isCorrect: false },
        { text: "Extraire les entités nommées", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "La tokenisation découpe le texte en tokens (mots, sous-mots, caractères) pour le traitement.",
    },
    {
      text: "Qu'est-ce qu'un word embedding ?",
      options: [
        {
          text: "Une représentation vectorielle dense des mots",
          isCorrect: true,
        },
        { text: "Un dictionnaire de mots", isCorrect: false },
        { text: "Une technique de traduction", isCorrect: false },
        { text: "Un algorithme de parsing", isCorrect: false },
      ],
      difficulty: "basic",
      explanation:
        "Les word embeddings représentent les mots dans un espace vectoriel dense.",
    },
    {
      text: "Qu'est-ce que BERT ?",
      options: [
        {
          text: "Bidirectional Encoder Representations from Transformers",
          isCorrect: true,
        },
        { text: "Basic Embedding Representation Technique", isCorrect: false },
        { text: "Binary Encoded Recurrent Transformer", isCorrect: false },
        { text: "Balanced Entity Recognition Tool", isCorrect: false },
      ],
      difficulty: "intermediate",
      explanation:
        "BERT est un modèle de langage bidirectionnel basé sur l'architecture Transformer.",
    },
  ],
};

// Générer des quiz pour chaque module
async function createExtensiveQuizzes() {
  try {
    const goals = await Goal.find();

    for (const goal of goals) {
      for (let i = 0; i < goal.modules.length; i++) {
        const module = goal.modules[i];

        // Sélectionner des questions appropriées selon la catégorie
        let questionPool = [];

        switch (goal.category) {
          case "ml":
            questionPool = [
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.ml,
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.math,
            ];
            break;
          case "dl":
            questionPool = [
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.dl,
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.programming,
            ];
            break;
          case "computer_vision":
            questionPool = [
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.computer_vision,
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.dl,
            ];
            break;
          case "nlp":
            questionPool = [
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.nlp,
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.programming,
            ];
            break;
          default:
            questionPool = [
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.programming,
              ...EXTENSIVE_ASSESSMENT_QUESTIONS.math,
            ];
        }

        // Mélanger et sélectionner 10 questions
        const shuffled = questionPool.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffled.slice(0, 10);

        // Randomize which answer is correct
        const randomizedQuestions = selectedQuestions.map(q => {
          // Randomly shuffle the options
          const shuffledOptions = [...q.options].sort(
            () => 0.5 - Math.random()
          );
          return {
            ...q,
            options: shuffledOptions,
          };
        });

        const quiz = new Quiz({
          moduleId: module._id.toString(),
          title: `Quiz - ${module.title}`,
          description: `Évaluez vos connaissances sur ${module.title}`,
          timeLimit: 1800, // 30 minutes
          passingScore: 70,
          questions: randomizedQuestions,
        });

        await quiz.save();
        logger.info(`Quiz created for module: ${module.title}`);
      }
    }
  } catch (error) {
    logger.error("Error creating extensive quizzes:", error);
  }
}

// Créer des utilisateurs de test avec profils diversifiés
async function createTestUsers() {
  try {
    const testUsers = [
      {
        email: "marie.diop@ucad.edu.sn",
        password: "Marie123!",
        role: "user",
      },
      {
        email: "amadou.fall@ucad.edu.sn",
        password: "Amadou123!",
        role: "user",
      },
      {
        email: "fatou.sow@ucad.edu.sn",
        password: "Fatou123!",
        role: "user",
      },
      {
        email: "ibrahim.ndiaye@ucad.edu.sn",
        password: "Ibrahim123!",
        role: "user",
      },
      {
        email: "aissatou.ba@ucad.edu.sn",
        password: "Aissatou123!",
        role: "user",
      },
    ];

    for (const userData of testUsers) {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ email: userData.email });
      if (!existingUser) {
        const user = new User(userData);
        await user.save();
        logger.info(`Test user created: ${userData.email}`);
      } else {
        logger.info(`User already exists: ${userData.email}`);
      }
    }
  } catch (error) {
    logger.error("Error creating test users:", error);
  }
}

// Créer des profils d'apprenants diversifiés
async function createLearnerProfiles() {
  try {
    const users = await User.find({ role: "user" });
    const goals = await Goal.find();

    const profileTemplates = [
      {
        learningStyle: "visual",
        preferences: {
          mathLevel: "intermediate",
          programmingLevel: "beginner",
          preferredDomain: "ml",
        },
      },
      {
        learningStyle: "kinesthetic",
        preferences: {
          mathLevel: "advanced",
          programmingLevel: "intermediate",
          preferredDomain: "dl",
        },
      },
      {
        learningStyle: "auditory",
        preferences: {
          mathLevel: "basic",
          programmingLevel: "advanced",
          preferredDomain: "computer_vision",
        },
      },
      {
        learningStyle: "reading",
        preferences: {
          mathLevel: "intermediate",
          programmingLevel: "intermediate",
          preferredDomain: "nlp",
        },
      },
      {
        learningStyle: "visual",
        preferences: {
          mathLevel: "advanced",
          programmingLevel: "advanced",
          preferredDomain: "mlops",
        },
      },
    ];

    for (let i = 0; i < Math.min(users.length, profileTemplates.length); i++) {
      const user = users[i];
      const template = profileTemplates[i];

      // Vérifier si un profil existe déjà pour cet utilisateur
      const existingProfile = await LearnerProfile.findOne({
        userId: user._id,
      });

      if (existingProfile) {
        logger.info(`Profile already exists for user: ${user.email}`);
        continue;
      }

      // Créer des évaluations simulées
      const assessments = [];
      const categories = [
        "math",
        "programming",
        template.preferences.preferredDomain,
      ];

      for (const category of categories) {
        const score = Math.floor(Math.random() * 40) + 60; // Score entre 60-100
        assessments.push({
          category,
          score,
          responses: [], // Simulé
          recommendations: [
            {
              category,
              score,
              recommendations: [
                `Continuez à pratiquer ${category}`,
                `Explorez des sujets avancés en ${category}`,
              ],
            },
          ],
          completedAt: new Date(
            Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
          ), // Dans les 30 derniers jours
        });
      }

      const profile = new LearnerProfile({
        userId: user._id,
        ...template,
        assessments,
        goal: goals[Math.floor(Math.random() * goals.length)]._id,
      });

      await profile.save();
      logger.info(`Learner profile created for: ${user.email}`);
    }
  } catch (error) {
    logger.error("Error creating learner profiles:", error);
  }
}

// Créer des parcours d'apprentissage en cours
async function createActivePathways() {
  try {
    const users = await User.find({ role: "user" });
    const goals = await Goal.find();

    for (let i = 0; i < Math.min(users.length, 3); i++) {
      const user = users[i];
      const goal = goals[i % goals.length];

      // Vérifier si un parcours existe déjà pour cet utilisateur et cet objectif
      const existingPathway = await Pathway.findOne({
        userId: user._id,
        goalId: goal._id,
      });

      if (existingPathway) {
        logger.info(
          `Pathway already exists for user ${user.email} and goal ${goal.title}`
        );
        continue;
      }

      const moduleProgress = goal.modules.map((module, index) => ({
        moduleIndex: index,
        completed: index < Math.floor(Math.random() * goal.modules.length),
        locked:
          index > 0 && index > Math.floor(Math.random() * goal.modules.length),
        resources: module.resources.map(resource => ({
          resourceId: resource._id || `resource_${index}_${Math.random()}`,
          completed: Math.random() > 0.3,
          completedAt: Math.random() > 0.5 ? new Date() : undefined,
          type: resource.type || "article",
        })),
        quiz: {
          completed: Math.random() > 0.4,
          score:
            Math.random() > 0.5 ? Math.floor(Math.random() * 40) + 60 : null,
          completedAt: Math.random() > 0.5 ? new Date() : null,
        },
      }));

      const completedModules = moduleProgress.filter(m => m.completed).length;
      const progress = Math.round(
        (completedModules / moduleProgress.length) * 100
      );

      const pathway = new Pathway({
        userId: user._id,
        goalId: goal._id,
        status: progress === 100 ? "completed" : "active",
        progress,
        currentModule: Math.min(completedModules, moduleProgress.length - 1),
        moduleProgress,
        startedAt: new Date(
          Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000
        ), // Dans les 60 derniers jours
        lastAccessedAt: new Date(
          Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
        ), // Dans les 7 derniers jours
        estimatedCompletionDate: new Date(
          Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000
        ), // Dans les 90 prochains jours
        adaptiveRecommendations: [
          {
            type: "practice",
            description: "Pratiquez les exercices du module en cours",
            priority: "high",
            status: "pending",
          },
          {
            type: "review",
            description: "Révisez les concepts précédents",
            priority: "medium",
            status: "pending",
          },
        ],
      });

      await pathway.save();
      logger.info(`Active pathway created for user: ${user.email}`);
    }
  } catch (error) {
    logger.error("Error creating active pathways:", error);
  }
}

async function populateExtensiveData() {
  try {
    await connectDB();

    logger.info("Starting extensive data population...");

    // Créer les objectifs étendus
    for (const goalData of EXTENSIVE_GOALS) {
      // Vérifier si l'objectif existe déjà
      const existingGoal = await Goal.findOne({ title: goalData.title });
      if (!existingGoal) {
        const goal = new Goal(goalData);
        await goal.save();
        logger.info(`Goal created: ${goalData.title}`);
      } else {
        logger.info(`Goal already exists: ${goalData.title}`);
      }
    }

    // Créer les évaluations étendues
    for (const [category, questions] of Object.entries(
      EXTENSIVE_ASSESSMENT_QUESTIONS
    )) {
      // Vérifier si l'évaluation existe déjà
      const existingAssessment = await Assessment.findOne({ category });
      if (!existingAssessment) {
        const assessment = new Assessment({
          title: `${category.toUpperCase()} Assessment`,
          category,
          difficulty: "intermediate",
          questions,
        });
        await assessment.save();
        logger.info(`Assessment created for category: ${category}`);
      } else {
        logger.info(`Assessment already exists for category: ${category}`);
      }
    }

    // Créer les quiz pour tous les modules
    await createExtensiveQuizzes();

    // Créer des utilisateurs de test
    await createTestUsers();

    // Créer des profils d'apprenants
    await createLearnerProfiles();

    // Créer des parcours actifs
    await createActivePathways();

    // Statistiques finales
    const stats = {
      users: await User.countDocuments(),
      goals: await Goal.countDocuments(),
      assessments: await Assessment.countDocuments(),
      quizzes: await Quiz.countDocuments(),
      profiles: await LearnerProfile.countDocuments(),
      pathways: await Pathway.countDocuments(),
    };

    logger.info("\n=== 🚀 EXTENSIVE DATA POPULATION COMPLETED ===");
    logger.info(`👥 Total Users: ${stats.users}`);
    logger.info(`🎯 Total Goals: ${stats.goals}`);
    logger.info(`📊 Total Assessments: ${stats.assessments}`);
    logger.info(`📝 Total Quizzes: ${stats.quizzes}`);
    logger.info(`👤 Total Profiles: ${stats.profiles}`);
    logger.info(`🛤️  Total Pathways: ${stats.pathways}`);
    logger.info("\n✅ Platform ready with extensive, realistic data!");
  } catch (error) {
    logger.error("Error during extensive data population:", error);
  } finally {
    await mongoose.disconnect();
    logger.info("Disconnected from MongoDB");
  }
}

// Exécuter le peuplement
populateExtensiveData();
