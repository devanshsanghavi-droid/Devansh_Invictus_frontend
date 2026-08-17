import React from 'react';

export interface Whitepaper {
    id: number;
    slug: string;
    title: string;
    overview: string;
    content: React.ReactNode;
    topics: string[];
    audience: string;
    image: string;
    category: string;
}

export const whitepapers: Whitepaper[] = [
    {
        id: 1,
        slug: "designing-ai-ready-data-platforms",
        title: "Designing AI-Ready Data Platforms",
        overview:
            "A practical guide for designing and modernizing enterprise data platforms that are optimized for AI use cases - from ingestion to governance to LLM readiness.",
        content: (
            <>
                <p className="mb-4">
                    The modern data stack is undergoing a seismic shift. To support advanced AI and Machine Learning workloads, enterprises must move beyond the constraints of traditional data warehouses toward flexible, scalable <strong>Data Lakehouse</strong> architectures. This whitepaper serves as a comprehensive guide for data architects and platform engineers looking to future-proof their infrastructure.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Themes Explored:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                    <li>
                        <strong>Data Lakehouse vs. Warehouse:</strong> We analyze the architectural differences and help you determine when to decouple storage from compute for maximum cost-efficiency and performance.
                    </li>
                    <li>
                        <strong>Modern Ingestion Patterns:</strong> Moving from batch ETL to real-time ELT pipelines. We discuss best practices for handling unstructured data integration.
                    </li>
                    <li>
                        <strong>Metadata & Governance:</strong> How to implement automated metadata management and lineage tracking to ensure data quality and regulatory compliance (GDPR, CCPA) without stifling innovation.
                    </li>
                    <li>
                        <strong>Infrastructure for GenAI:</strong> A deep dive into the specific requirements for Generative AI, including vector database integration, semantic search capabilities, and managing large-scale embeddings.
                    </li>
                </ul>
                <p className="text-gray-700">
                    By adopting these patterns, organizations can reduce time-to-insight and build a solid foundation for democratizing data access across the enterprise.
                </p>
            </>
        ),
        topics: [
            "Data Lakehouse vs Traditional Warehouse: When and why to choose",
            "ELT vs Reverse ETL: Best practices for activation layers",
            "Metadata, Lineage & Governance: Designing trust into your stack",
            "Scaling for GenAI Workloads: Architectures that support vector search, embedding, and LLM integration",
        ],
        audience: "CDOs, Data Architects, Platform Engineers, AI Ops Teams",
        image: "https://assets.channeliq.ai/invictus-landing/Resources/DesigningAIReadyDataPlatforms.png",
        category: "Data Engineering",
    },
    {
        id: 2,
        slug: "llms-in-enterprise",
        title: "LLMs in Enterprise: From Prototype to Production",
        overview:
            "An actionable playbook for businesses looking to responsibly deploy and scale Large Language Models (LLMs) in production - covering architecture, safety, and system design.",
        content: (
            <>
                <p className="mb-4">
                    Moving Large Language Models (LLMs) from a sandbox environment to a production-grade enterprise application presents a unique set of challenges. This playbook is designed for engineering leaders and AI practitioners who need to navigate the complexities of <strong>LLM Ops</strong>, ensuring reliability, safety, and scalability.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">What You Will Learn:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                    <li>
                        <strong>RAG Architectures:</strong> A step-by-step guide to implementing Retrieval-Augmented Generation (RAG) to ground your models in proprietary data, significantly reducing hallucinations.
                    </li>
                    <li>
                        <strong>Safety & Guardrails:</strong> Strategies for implementing content moderation, bias detection, and human-in-the-loop feedback mechanisms to ensure your AI behaves responsibly.
                    </li>
                    <li>
                        <strong>Vector Store Optimization:</strong> How to select and architect the right vector store (e.g., Pinecone, Qdrant, Milvus) for low-latency similarity search and context retrieval.
                    </li>
                    <li>
                        <strong>Cost & Performance Management:</strong> Techniques for token optimization, caching responses, and choosing the right model size (open source vs. proprietary) for your specific use case.
                    </li>
                </ul>
                <p className="text-gray-700">
                    This guide provides the blueprints needed to bridge the gap between AI potential and tangible business value.
                </p>
            </>
        ),
        topics: [
            "Hybrid Chunking & Retrieval-Augmented Generation (RAG)",
            "Guardrails, Moderation, & Human Feedback Loops",
            "Vector Store Architecture: Using tools like Pinecone, Qdrant, FAISS",
            "Enterprise Compliance & Audit Logging for LLMs",
        ],
        audience: "CTOs, AI Engineers, LLM Product Owners, Innovation Leads",
        image: "https://assets.channeliq.ai/invictus-landing/Resources/LLMsinEnterprise.png",
        category: "AI & ML",
    },
    {
        id: 3,
        slug: "modernizing-legacy-apis",
        title: "Modernizing Legacy APIs for Scalable Commerce",
        overview:
            "A modernization blueprint for enterprise teams seeking to replatform legacy APIs and integrate modern interfaces across cloud-native environments.",
        content: (
            <>
                <p className="mb-4">
                    In the fast-paced world of digital commerce, legacy monolithic applications are becoming a bottleneck for innovation. This whitepaper offers a strategic blueprint for <strong>API Modernization</strong>, empowering teams to break down monoliths into agile, scalable microservices that drive better customer experiences.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Strategic Insights:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                    <li>
                        <strong>Protocol Selection:</strong> A comparative analysis of REST, GraphQL, and gRPC. We help you choose the right interface based on payload size, latency requirements, and client diversity.
                    </li>
                    <li>
                        <strong>Containerization & Orchestration:</strong> Best practices for containerizing API services using Docker and managing them with Kubernetes to ensure high availability and seamless scaling.
                    </li>
                    <li>
                        <strong>API Gateway Strategy:</strong> leveraging gateways (like Kong or Apigee) for centralized authentication, rate limiting, and observability, simplifying the complexity of microservices communication.
                    </li>
                    <li>
                        <strong>Automated Quality Assurance:</strong> Implementing contract testing and automated CI/CD pipelines to catch regressions early and accelerate release cycles.
                    </li>
                </ul>
                <p className="text-gray-700">
                    Is modernizing your API layer the key to unlocking new revenue streams? Find out how to execute this transformation with minimal disruption.
                </p>
            </>
        ),
        topics: [
            "REST vs GraphQL vs gRPC: Choosing the right API strategy",
            "API Containerization & CI/CD: Shipping faster with Docker + GitOps",
            "Gateway Architecture: Building scalable APIs with Kong, Apigee",
            "Automated Testing & Contract Enforcement",
        ],
        audience: "Backend Developers, DevOps Teams, Platform Architects",
        image: "https://assets.channeliq.ai/invictus-landing/Resources/ModernizingLegacyAPIs.png",
        category: "Product Engineering",
    },
];
