export const navigation = [
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Solution", href: "#solution" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#final-cta" }
] as const;

export const heroHighlights = [
  { value: "Déploiement on-premise / VPC", label: "VM, Docker ou cluster privé" },
  { value: "RAG documentaire", label: "indexation de vos corpus internes" },
  { value: "LLM local ou endpoint privé", label: "latence pilotée sur votre infrastructure" }
] as const;



export const problemPoints = [
  {
    title: "Flou produit = risque de rejet",
    description:
      "Sans périmètre technique explicite (RAG, LLM, infra), le projet reste difficile à valider côté CTO/DSI."
  },
  {
    title: "Réponses non auditables",
    description:
      "Sans moteur documentaire sérieux, il est difficile de justifier une réponse en production."
  },
  {
    title: "Sécurité traitée trop tard",
    description:
      "Chiffrement, isolation, droits d'accès et traçabilité doivent être cadrés dès le déploiement."
  }
] as const;

export const solutionBullets = [
  "RAG sur vos documents internes",
  "LLM local ou endpoint privé selon vos contraintes",
  "Interface de chat interne avec sources visibles",
  "Déploiement, exploitation et maintenance opérables"
] as const;

export const benefits = [
  {
    title: "Les données restent chez vous",
    description: "Le cadre d'hébergement reste maîtrisé."
  },
  {
    title: "Les réponses citent leurs sources",
    description: "Le retour au document est immédiat."
  },
  {
    title: "Le déploiement suit votre SI",
    description: "Intranet, VM, serveur dédié ou cluster interne."
  },
  {
    title: "Le produit est simple à adopter",
    description: "Une UX claire pour des usages quotidiens."
  }
] as const;

export const useCases = [
  {
    title: "Support interne",
    description:
      "Répondre aux questions RH, process et opérations avec sources et procédures à jour.",
    image: "/placeholders/docs-placeholder.svg"
  },
  {
    title: "Base documentaire",
    description:
      "Interroger contrats, politiques, procédures et notes internes en langage naturel.",
    image: "/placeholders/ops-placeholder.svg"
  },
  {
    title: "Juridique interne",
    description:
      "Retrouver clauses, obligations et versions de documents sans exposer les données hors périmètre.",
    image: "/placeholders/portrait-placeholder.svg"
  },
  {
    title: "IT helpdesk",
    description:
      "Assister les équipes IT sur incidents récurrents, runbooks et documentation technique.",
    image: "/placeholders/portrait-placeholder.svg"
  }
] as const;

export const workflowSteps = [
  {
    title: "Déploiement sur votre infrastructure",
    description:
      "On-premise, VPC ou cloud privé selon vos contraintes réseau et sécurité."
  },
  {
    title: "Indexation des documents internes",
    description:
      "Corpus métier segmenté par droits d'accès pour un RAG exploitable en production."
  },
  {
    title: "LLM local ou endpoint sécurisé",
    description:
      "Exécution locale ou connexion privée, sans exposition non maîtrisée des flux."
  },
  {
    title: "Accès via chat interne",
    description: "Interface web interne avec SSO, rôles et journalisation d'audit."
  }
] as const;



export const faqs = [
  {
    question: "Quels modèles de langage sont supportés ?",
    answer:
      "La plateforme est compatible avec les principaux modèles open source : Mistral, LLaMA 3, Gemma, Phi et d'autres. Le choix du modèle dépend de vos ressources matérielles et de vos besoins en précision. Nous vous guidons dans ce choix lors de la phase d'installation."
  },
  {
    question: "Quelle infrastructure est nécessaire ?",
    answer:
      "Une configuration minimale avec GPU (NVIDIA recommandé, 16 Go VRAM) suffit pour des usages courants. Pour des volumes importants ou des modèles plus puissants, nous dimensionnons l'infrastructure avec vous. Un déploiement sur VM ou serveur dédié est également possible sans GPU via quantification CPU."
  },
  {
    question: "Nos données sont-elles vraiment 100% locales ?",
    answer:
      "Oui, sans exception. L'indexation, l'inférence et les logs restent sur votre réseau. Aucun appel vers un service externe n'est effectué pendant l'utilisation. La solution fonctionne même en environnement air-gapped (réseau fermé, sans accès internet)."
  },
  {
    question: "Comment s'intègre la solution avec nos outils existants ?",
    answer:
      "Nous supportons les sources de documents les plus courantes : SharePoint, drives réseau (SMB/NFS), Confluence, Notion, PDF, Word, et bases de données via connecteurs. Une API REST est également disponible pour intégration dans vos outils métier existants."
  },
  {
    question: "Combien de temps prend le déploiement ?",
    answer:
      "Un déploiement standard est opérationnel en 3 à 5 jours ouvrés : installation de la stack, connexion des premières sources de données et formation des utilisateurs clés. Des projets plus complexes (multi-sites, intégrations avancées) sont planifiés sur mesure."
  },
  {
    question: "Que se passe-t-il si nous souhaitons changer de modèle plus tard ?",
    answer:
      "Le changement de modèle est possible à tout moment sans réindexer vos documents. La plateforme est conçue pour être agnostique au modèle : vous pouvez tester et comparer plusieurs modèles en parallèle avant de choisir."
  }
] as const;

export const contactDetails = {
  phone: "+33 1 89 70 42 18",
  email: "bonjour@localia.fr"
} as const;
