import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  ArrowLeft,
  Cloud,
  Database,
  Settings,
  Zap,
  BarChart3,
  Cpu,
  HardDrive,
  Code,
  CheckCircle,
} from "lucide-react";

const SparkOptimizationGCPDataproc: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/blog-insights");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#EFF6FF] flex flex-col">
      <div className="relative z-20">
        <Navbar
          showContactForm={showContactForm}
          setShowContactForm={setShowContactForm}
          logoSize="sm"
        />
      </div>
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 relative z-10 flex-1">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog & Insights
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 font-['Lexend'] leading-tight">
            Spark Optimization Techniques in GCP Dataproc
          </h1>
          <div className="text-base sm:text-lg text-slate-600 font-['DM_Sans'] mb-6">
            By Nirjar Sanghavi, CEO
          </div>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto rounded-full mb-8"></div>

          {/* Blog Image */}
          <div className="w-full max-w-5xl mx-auto ml-4 sm:ml-8 lg:ml-24">
            <img
              src="https://assets.channeliq.ai/invictus-landing/Solutions/SparkOptimization.png"
              alt="Spark Optimization Techniques in GCP Dataproc"
              width={896}
              height={488}
              className="w-full h-auto rounded-2xl shadow-2xl border border-[#2563EB]/30 object-cover"
              style={{ maxWidth: "896px", maxHeight: "488px" }}
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8 mb-8">
          <p className="text-base sm:text-lg text-slate-900 font-['DM_Sans'] leading-relaxed">
            Google Cloud Dataproc offers a managed, scalable Apache Spark
            environment that simplifies large-scale data processing. But to
            fully harness its power—while controlling cost and maximizing
            speed—you need savvy optimization techniques. In this guide, we'll
            explore best practices for Spark tuning specifically tailored to
            Dataproc, bolstered by real-world examples and visual aids.
          </p>
        </div>

        {/* Additional Image */}
        <div className="w-full max-w-5xl mx-auto mb-8 lg:ml-24">
          <img
            src="https://assets.channeliq.ai/invictus-landing/Resources/0.png"
            alt="Spark Optimization Visual Guide"
            width={896}
            height={488}
            className="w-full h-auto rounded-2xl shadow-2xl border border-[#2563EB]/30 object-cover"
            style={{ maxWidth: "896px", maxHeight: "488px" }}
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Section 1 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                1. Adopt Ephemeral Clusters
              </h2>
            </div>

            <div className="mb-6">
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Use dedicated, short-lived clusters per job and terminate
                    them upon job completion. This avoids shared cluster
                    pitfalls like log bloat, resource contention, outdated
                    software, and configuration drift.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    It also simplifies troubleshooting and saves cost by
                    avoiding idle resources.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                2. Leverage Spark SQL and Upgraded Engine
              </h2>
            </div>

            <div className="mb-6">
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Prefer Spark SQL DataFrame or Dataset APIs instead of raw
                    RDDs to benefit from Spark's Catalyst optimizer and more
                    concise, efficient execution plans.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Use Spark 3.x on Dataproc 2.x image versions. Spark 3 brings
                    Adaptive Query Execution (AQE), Dynamic Partition Pruning,
                    performance improvements, and GPU support.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                3. Enable Spark Dynamic Allocation & Autoscaling
              </h2>
            </div>

            <div className="mb-6">
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Spark's dynamic allocation smartly scales executors up/down
                    based on workload—enabled by default on Dataproc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Combine with Dataproc autoscaling to adjust cluster size
                    automatically. Ensure autoscaling policies only affect
                    secondary workers to maintain cluster stability.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                4. Use Enhanced Flexibility Mode (EFM)
              </h2>
            </div>

            <div className="mb-6">
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed">
                In autoscaled or preemptible setups, EFM helps handle shuffle
                fetch failures gracefully by avoiding storage of intermediate
                shuffle data on volatile workers.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                5. Fine‑Tune Partitioning & Shuffle Parameters
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Adjust shuffle and parallelism settings:
              </h3>
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <code className="bg-[#2563EB]/20 px-2 py-1 rounded">
                      spark.sql.shuffle.partitions
                    </code>
                    : default is 1000 on Dataproc, often too high. A practical
                    rule: set it to ~3× total vCPUs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    <code className="bg-[#2563EB]/20 px-2 py-1 rounded">
                      spark.default.parallelism
                    </code>
                    : same guideline—3× vCPUs to balance load across tasks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    Avoid too many small files—they slow reads dramatically.
                    Target larger chunk sizes (256MB–512MB).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                6. Use Columnar Formats & Filtering Early
              </h2>
            </div>

            <div className="mb-6">
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Store and process data in Parquet (default on Spark SQL) or
                    Avro for improved I/O efficiency over JSON/CSV.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Apply early filtering and column pruning to reduce data
                    volume as early as possible:
                  </span>
                </li>
              </ul>
              <div className="bg-[#1a1a1a] rounded-lg p-4 mt-4">
                <code className="text-green-400 font-mono text-sm">
                  df = df.select('name', 'age').filter(df['age'] &gt; 21)
                </code>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                7. Minimize Shuffles & Use Built‑in Functions
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Shuffles are costly. Reduce them by:
              </h3>
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>Avoiding unnecessary repartitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>Using broadcast joins for small datasets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    Preferring{" "}
                    <code className="bg-[#2563EB]/20 px-1 py-0.5 rounded">
                      reduceByKey()
                    </code>{" "}
                    over{" "}
                    <code className="bg-[#2563EB]/20 px-1 py-0.5 rounded">
                      groupByKey()
                    </code>
                    .
                  </span>
                </li>
              </ul>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
                Use built-in functions (e.g.,{" "}
                <code className="bg-[#2563EB]/20 px-1 py-0.5 rounded">
                  upper()
                </code>{" "}
                from pyspark.sql.functions) instead of UDFs—they avoid
                serialization overhead and benefit from Catalyst optimization.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <HardDrive className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                8. Optimize Disk & GPU Resources
              </h2>
            </div>

            <div className="mb-6">
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    Local SSDs dramatically improve disk throughput, essential
                    for shuffle-heavy jobs. Assign one local SSD per every ~4
                    vCPUs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                  <span>
                    For GPU-accelerated workloads, use Spark 3 + RAPIDS SQL
                    Accelerator on GPU-enabled Dataproc clusters.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                9. Custom Executor Configurations: A Real-World Example
              </h2>
            </div>

            <div className="mb-6">
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed mb-4">
                A practical reconfiguration improved resource usage
                substantially:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h4 className="text-[#2563EB] font-semibold mb-2">Before:</h4>
                  <p className="text-slate-900 text-sm">
                    2 large executors with 15 cores each → low utilization.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h4 className="text-[#2563EB] font-semibold mb-2">After:</h4>
                  <div className="text-slate-900 text-sm space-y-1">
                    <div>
                      <code>spark.executor.cores = 1</code>
                    </div>
                    <div>
                      <code>spark.executor.memory = 4g</code>
                    </div>
                    <div>
                      <code>spark.executor.instances = 28</code>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
                Using a cluster of 4 workers (8 vCPUs each), this configuration
                led to ~99% RAM usage and ~70% CPU utilization.
              </p>
              <div className="bg-[#1a1a1a] rounded-lg p-4 mt-4">
                <h4 className="text-[#2563EB] font-semibold mb-2">
                  Additional Settings:
                </h4>
                <div className="text-slate-900 text-sm space-y-1">
                  <div>
                    <code>spark.shuffle.service.enabled = true</code>
                  </div>
                  <div>
                    <code>spark.dynamicAllocation.enabled = true</code>
                  </div>
                  <div>
                    <code>spark.dynamicAllocation.minExecutors = 2</code>
                  </div>
                  <div>
                    <code>spark.dynamicAllocation.maxExecutors = 120</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Image after Section 9 */}
          <div className="w-full max-w-5xl mx-auto mb-8 lg:ml-24">
            <img
              src="https://assets.channeliq.ai/invictus-landing/Resources/1.png"
              alt="Custom Executor Configuration Example"
              width={896}
              height={488}
              className="w-full h-auto rounded-2xl shadow-2xl border border-[#2563EB]/30 object-cover"
              style={{ maxWidth: "896px", maxHeight: "488px" }}
            />
          </div>

          {/* Section 10 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                10. Activate Dataproc Performance Enhancements
              </h2>
            </div>

            <div className="mb-6">
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed mb-4">
                Dataproc offers built-in job optimizations:
              </p>
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <p className="text-slate-900 text-sm mb-2">
                  Enable at cluster creation:
                </p>
                <code className="text-green-400 font-mono text-sm">
                  --properties spark.dataproc.enhanced.optimizer.enabled=true,
                  <br />
                  spark.dataproc.enhanced.execution.enabled=true
                </code>
              </div>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
                Or include when submitting jobs via gcloud or console.
              </p>
            </div>
          </div>

          {/* Summary Table */}
          <div className="bg-gradient-to-r from-[#2563EB]/20 to-[#1E3A8A]/20 backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-['Lexend'] text-center leading-tight">
              Conclusion: A Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base text-slate-900 font-['DM_Sans']">
                <thead>
                  <tr className="border-b border-[#2563EB]/30">
                    <th className="text-left py-3 px-4 font-semibold text-[#2563EB]">
                      Strategy
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[#2563EB]">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">Ephemeral clusters</td>
                    <td className="py-3 px-4">
                      Isolation, cost-efficiency, maintainability
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">Spark SQL & Spark 3</td>
                    <td className="py-3 px-4">
                      Optimize execution, leverage new features
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">
                      Dynamic Allocation + Autoscale
                    </td>
                    <td className="py-3 px-4">
                      Adapt resource usage to workload
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">
                      Enhanced Flexibility Mode (EFM)
                    </td>
                    <td className="py-3 px-4">
                      Avoid shuffle failures during scaling
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">
                      Partition/Tuning configurations
                    </td>
                    <td className="py-3 px-4">
                      Balance job parallelism and resource usage
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">Columnar formats & pruning</td>
                    <td className="py-3 px-4">
                      Reduce I/O and processing overhead
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">Reduce shuffles & UDFs</td>
                    <td className="py-3 px-4">Minimize costly operations</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">SSD / GPU acceleration</td>
                    <td className="py-3 px-4">
                      Boost I/O and compute processing speeds
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4">
                      Custom executor config example
                    </td>
                    <td className="py-3 px-4">
                      Demonstrated high cluster utilization (99% RAM)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Dataproc enhancements</td>
                    <td className="py-3 px-4">
                      Built-in performance tuning with minimal work
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Closing Thoughts */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-['Lexend'] text-center leading-tight">
              Closing Thoughts
            </h2>
            <p className="text-base sm:text-lg text-slate-900 font-['DM_Sans'] leading-relaxed text-center">
              Efficient Spark workloads on Dataproc combine smart cluster
              design, Spark-level tuning, data layout choices, and Dataproc's
              powerful features. By systematically applying these optimizations,
              you achieve faster job times, better resource use, lower cost—and
              a more resilient, scalable platform.
            </p>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={handleBackClick}
            className="bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg px-6 sm:px-8 py-2 sm:py-3 font-['Lexend'] font-semibold text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#2563EB]/25"
          >
            Back to Blog & Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default SparkOptimizationGCPDataproc;
