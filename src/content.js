export const projects = [
  {
    id: "smurf",
    name: "SMURF",
    kind: "Computer vision",
    category: "Evidence provenance",
    headline: "A face becomes a trail of evidence.",
    short: "Reverse-image search with a receipt you can check.",
    description:
      "SMURF carries a face image through detection, embedding, reverse-image search, evidence hashing, and a Sepolia blockchain receipt. Its interface follows real pipeline events, making each stage visible.",
    image: "/work/smurf.jpg",
    imageAlt:
      "The opening particle scene in SMURF before starting an evidence search.",
    imageWidth: 1280,
    imageHeight: 720,
    source: "https://github.com/avirenusurya/smurf",
    evidence:
      "https://sepolia.etherscan.io/tx/0xb67b25a68fc21c2dcfe433196f7440dbb1435e40d6cfe79ad9a0bc6d905ae8c5",
    stack: ["Next.js", "TypeScript", "Python", "InsightFace", "Solidity"],
    decisions: [
      [
        "One canvas, five stages",
        "The same 2,400 particles change form as the pipeline moves from face detection to search, a match, and an evidence receipt. The motion follows the work.",
      ],
      [
        "Keep the evidence checkable",
        "Exact image hashes, an embedding hash, and canonical evidence JSON produce a commitment. Only that commitment goes on-chain; retained bytes can be checked again.",
      ],
      [
        "An inspectable run",
        "A genuine retained run includes a successful example transaction in Sepolia block 11,633,729. This is a demonstration, not a benchmark.",
      ],
    ],
    limitation:
      "A similar face is not proof of identity. The pipeline can return a social post or profile. Anchoring proves that a commitment was recorded by a wallet at a block time; it does not prove authorship, account identity, or original publication time. The example uses Sepolia testnet.",
  },
  {
    id: "docs-agent",
    name: "docs-agent",
    category: "RAG & agents",
    short: "A docs assistant that cites its sources and shows its work.",
    description:
      "An agentic assistant for developer documentation. It rewrites a question, retrieves and reranks relevant passages, then answers with citations and a trace of each step.",
    stack: ["Python", "FastAPI", "React", "pgvector"],
    image: "/work/docs-agent.png",
    imageAlt:
      "The actual docs-agent interface with example questions and a reranker control.",
    imageWidth: 1920,
    imageHeight: 1080,
    mediaLabel: "Answers, with a paper trail.",
    live: "https://docs-agent-wine.vercel.app",
    source: "https://github.com/avirenusurya/docs-agent",
    decisions: [
      [
        "A trace you can inspect",
        "The rewritten query, retrieved chunks, rerank scores, and cited sources stay visible instead of disappearing behind the final answer.",
      ],
      [
        "Reranking, measured",
        "On the published 25-question set, hit@5 improves with reranking while hit@1 and MRR decline. The trade-off matters because the answerer uses the top five passages.",
      ],
      [
        "Replaceable parts",
        "The chat model, embedder, reranker, and vector store sit behind small interfaces, so the pipeline can evolve without replacing the whole application.",
      ],
    ],
    limitation:
      "The evaluation set is small. These results describe that set, not a general guarantee about answer quality. The demo backend can take 30–60 seconds to wake up.",
  },
  {
    id: "safewaves",
    name: "SafeWaves",
    category: "Explainable AI",
    short: "Six threat detectors. One understandable result.",
    description:
      "A cyber-defense platform bringing phishing, malicious URLs, deepfake indicators, prompt injection, login anomalies, and AI-text analysis into one workflow.",
    stack: ["FastAPI", "scikit-learn", "SHAP", "React"],
    image: "/work/safewaves.png",
    imageAlt:
      "The actual SafeWaves dashboard showing its six analysis modules.",
    imageWidth: 1280,
    imageHeight: 720,
    mediaLabel: "From input to explanation.",
    live: "https://safewaves.vercel.app",
    source: "https://github.com/avirenusurya/safewaves",
    decisions: [
      [
        "One shared response",
        "Different detectors return different kinds of evidence. A shared response schema brings their risk scores, explanations, and recommended actions into the same interface.",
      ],
      [
        "Explanations without an API dependency",
        "Template explanations keep the core experience available when Gemini is unavailable. The language model adds another explanation layer.",
      ],
      [
        "Test the weak spots",
        "Adversarial checks expose brittle heuristics. In the documented test, removing image metadata dramatically changes the deepfake result without changing the pixels.",
      ],
    ],
    limitation:
      "The image detector relies on metadata and image-noise heuristics. It is not a reliable general deepfake classifier. The behavior module also uses a limited city table.",
  },
  {
    id: "voice",
    name: "SafeWaves Voice",
    category: "Speech & applied ML",
    short: "An API-first experiment in multilingual voice authenticity.",
    description:
      "A voice-authenticity API and demo covering Tamil, English, Hindi, Malayalam, and Telugu. It classifies an input clip and returns a confidence score with a short explanation.",
    stack: ["PyTorch", "FastAPI", "wav2vec2", "Gradio"],
    image: "/work/voice.png",
    imageAlt:
      "The actual SafeWaves Voice Gradio demo with audio upload and language selection.",
    imageWidth: 1280,
    imageHeight: 720,
    live: "https://huggingface.co/spaces/avirenusurya/VoiceDetection",
    source: "https://github.com/avirenusurya/safewaves-voice",
    decisions: [
      [
        "API first",
        "A strict response shape lets another application use the classifier without depending on the demo interface.",
      ],
      [
        "Five languages",
        "The interface accepts an explicit language with the audio sample and keeps the result small: classification, confidence, and explanation.",
      ],
      [
        "A buildathon project",
        "Built for the India AI Impact Buildathon. The published project account records a top-2% result and a team finish in the Top 20.",
      ],
    ],
    limitation:
      "Predictions and confidence scores need to be interpreted in the context of the model and evaluation data. A prediction alone does not establish that a recording is authentic.",
  },
  {
    id: "folio",
    name: "Folio",
    image: "/work/folio.jpg",
    imageAlt:
      "Folio's actual sign-in screen with Google sign-in and a magic-link form.",
    imageWidth: 1280,
    imageHeight: 720,
    category: "Realtime products",
    short: "A quiet companion for doing the work.",
    description:
      "A study companion with a focus timer, study heatmap, habit streaks, a private journal, and a realtime group leaderboard. Built with React and Supabase.",
    stack: ["React", "Supabase", "PostgreSQL"],
    live: "https://folio-kohl-one.vercel.app",
    source: "https://github.com/avirenusurya/folio",
    decisions: [
      [
        "Focus, made visible",
        "Study sessions connect the timer to a calendar view so time spent working has a visible history.",
      ],
      [
        "A little accountability",
        "The Society feature brings group presence and a leaderboard into the same study experience.",
      ],
      [
        "A small operational footprint",
        "Supabase provides authentication, data, and realtime updates without a separate application server.",
      ],
    ],
    limitation:
      "A sign-in is required for the personal study features. The preview shows the application's sign-in screen.",
  },
];
