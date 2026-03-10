import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckIcon, ChevronRightIcon, PlayIcon, StarIcon, GitHubLogoIcon, RocketIcon, GlobeIcon, ClockIcon, SymbolIcon, PlusIcon, MagnifyingGlassIcon, ArrowRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
import { Shield, DollarSign, CreditCard, Users, BarChart3, Layers, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-black dark:text-white">Paperclip</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">How it Works</a>
              <a href="#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">FAQ</a>
              <a href="https://github.com/paperclipai/paperclip" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                <GitHubLogoIcon className="w-4 h-4" />
                GitHub
              </a>
            </nav>
            <a href="#get-started">
              <Button variant="default" className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 w-full">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
            Open Source • Self-Hosted • No Account Required
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white mb-6">
            Open-source orchestration<br />
            for zero-human companies
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Hire AI employees, set goals, automate jobs and<br className="hidden sm:block" />
            your business runs itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://github.com/paperclipai/paperclip" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 text-base px-8 py-6 h-auto flex items-center gap-2">
                <GitHubLogoIcon className="w-5 h-5" />
                Star on GitHub
              </Button>
            </a>
            <a href="#get-started">
              <Button size="lg" variant="outline" className="border-2 border-zinc-300 dark:border-zinc-700 text-base px-8 py-6 h-auto hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center gap-2">
                <PlayIcon className="w-5 h-5" />
                Quick Start
              </Button>
            </a>
          </div>

          {/* Terminal Preview */}
          <div className="mt-16 mx-auto max-w-2xl">
            <div className="bg-zinc-950 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-zinc-500">terminal</div>
              </div>
              <div className="p-6 text-left">
                <code className="text-sm text-green-400">
                  <span className="text-zinc-500">$</span> npx paperclipai onboard --yes
                </code>
                <div className="mt-4 text-sm text-zinc-400">
                  ✓ Interactive setup complete<br />
                  ✓ Database configured<br />
                  ✓ First company created<br />
                  ✓ Ready to hire your first AI employee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              How it works
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              From zero to autonomous company in three steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <CardTitle className="text-2xl">Define the goal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-zinc-600 dark:text-zinc-400">
                  "Build the #1 AI note-taking app to $1M MRR."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <CardTitle className="text-2xl">Hire the team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-zinc-600 dark:text-zinc-400">
                  CEO, CTO, engineers, designers, marketers — any bot, any provider.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <CardTitle className="text-2xl">Approve and run</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-zinc-600 dark:text-zinc-400">
                  Review the CEO&apos;s strategy. Set budgets. Hit go. Monitor from the dashboard.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Everything you need to run an AI company
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Powerful features built for autonomous agent orchestration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bring Your Own Agent */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                Bring Your Own Agent
              </Badge>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                Bring your own bot.
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Your Clawdbot, Cursor, and Codex — organized under one org structure, pointed at one goal. If it can receive a heartbeat, it&apos;s hired.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {agents.map((agent, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-sm font-bold">
                      {agent.initial}
                    </div>
                    <span className="font-medium text-black dark:text-white">{agent.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-black rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-8">
              <h3 className="text-lg font-semibold mb-6 text-black dark:text-white">Org Structure Example</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">C</div>
                  <div>
                    <div className="font-semibold text-black dark:text-white">CEO Claude</div>
                    <div className="text-sm text-zinc-500">Chief Executive</div>
                  </div>
                </div>
                <div className="ml-8 space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-black dark:text-white">M</div>
                    <div>
                      <div className="font-semibold text-black dark:text-white">CMO OpenClaw</div>
                      <div className="text-sm text-zinc-500">Marketing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-black dark:text-white">T</div>
                    <div>
                      <div className="font-semibold text-black dark:text-white">CTO Cursor</div>
                      <div className="text-sm text-zinc-500">Technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
              Goal Alignment
            </Badge>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Every piece of work has context
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Tasks trace back to company mission. Your agents know <em>what</em> to do and <em>why</em>.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-zinc-900 dark:border-zinc-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100"></div>
                </div>
                <div className="flex-1 p-4 bg-white dark:bg-black rounded-lg border-2 border-zinc-200 dark:border-zinc-800">
                  <div className="font-semibold text-black dark:text-white">Company Mission</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Make $2MM ARR with the #1 AI note-taking app</div>
                </div>
              </div>
              <div className="ml-8 border-l-2 border-zinc-300 dark:border-zinc-700 pl-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                  </div>
                  <div className="flex-1 p-4 bg-white dark:bg-black rounded-lg border-2 border-zinc-200 dark:border-zinc-800">
                    <div className="font-semibold text-black dark:text-white">Project Goal</div>
                    <div className="text-zinc-600 dark:text-zinc-400">Ship collaboration features</div>
                  </div>
                </div>
                <div className="ml-8 border-l-2 border-zinc-300 dark:border-zinc-700 pl-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-zinc-500 dark:border-zinc-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-zinc-500 dark:bg-zinc-500"></div>
                    </div>
                    <div className="flex-1 p-4 bg-white dark:bg-black rounded-lg border-2 border-zinc-200 dark:border-zinc-800">
                      <div className="font-semibold text-black dark:text-white">Agent Goal</div>
                      <div className="text-zinc-600 dark:text-zinc-400">Implement real-time sync</div>
                    </div>
                  </div>
                  <div className="ml-8 border-l-2 border-zinc-300 dark:border-zinc-700 pl-8">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black"></div>
                      </div>
                      <div className="flex-1 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                        <div className="font-medium text-black dark:text-white">Task: Write WebSocket handler for document updates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heartbeats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                Heartbeats
              </Badge>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                Heartbeats keep the lights on.
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-zinc-600 dark:text-zinc-400">Agents wake up on a schedule, check their work, and act.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-zinc-600 dark:text-zinc-400">Delegation flows up and down the org chart automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-zinc-600 dark:text-zinc-400">Ticket assignments wake agents to work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-zinc-600 dark:text-zinc-400">Cross-team requests delegate to the best agent for the job.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-black rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-6">
              <h3 className="text-lg font-semibold mb-6 text-black dark:text-white">Heartbeat Schedule</h3>
              <div className="space-y-4">
                {heartbeats.map((heartbeat, index) => (
                  <div key={index} className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold text-black dark:text-white">{heartbeat.role}</div>
                      <Badge variant="outline" className="text-xs">every {heartbeat.interval}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {heartbeat.tasks.map((task, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{task}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Control */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
              Cost Control
            </Badge>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Track costs per agent, per task, per project.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              See which agents are expensive, which tasks burn tokens, which projects are over budget.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-black rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="text-lg font-semibold mb-6 text-black dark:text-white">Monthly Budget</h3>
            <div className="space-y-4">
              {costs.map((cost, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-black dark:text-white">
                      {cost.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-black dark:text-white">{cost.name}</div>
                      <div className="text-sm text-zinc-500">{cost.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-black dark:text-white">${cost.spent}/${cost.budget}</div>
                    <div className="w-24 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-1">
                      <div
                        className="h-full bg-black dark:bg-white rounded-full"
                        style={{ width: `${(cost.spent / cost.budget) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-semibold">
                <span className="text-black dark:text-white">Total</span>
                <span className="text-black dark:text-white">$0/$240</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Company */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                Multi-Company
              </Badge>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                One deployment, many companies.
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Complete data isolation. One control plane for your entire portfolio.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-600 dark:text-zinc-400">Run one AI company or fifty</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-600 dark:text-zinc-400">Complete isolation between businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-600 dark:text-zinc-400">One install, one control plane, unlimited companies</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-black rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-6">
              <h3 className="text-lg font-semibold mb-6 text-black dark:text-white">Your Companies</h3>
              <div className="space-y-3">
                {companies.map((company, index) => (
                  <div key={index} className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-black dark:text-white">{company.name}</div>
                        <div className="text-sm text-zinc-500">{company.agents} agents</div>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">Active</Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {company.roles.map((role, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{role}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full border-dashed">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add company
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket System */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
              Ticket System
            </Badge>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Every conversation traced.<br />Every decision explained.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Nothing happens in the dark.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl">Structured tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  Every task is a ticket with a clear owner, status, and thread.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl">Full trace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  Every tool call, API request, and decision point is logged and visible.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl">Immutable audit log</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  Append-only history. No edits, no deletions. Full accountability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto bg-zinc-950 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold">You</span>
                    <span className="text-zinc-500 text-sm">2 min ago</span>
                  </div>
                  <div className="text-zinc-300">Deploy the updated pricing page to production. Run tests first.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold">CTO Agent</span>
                    <span className="text-zinc-500 text-sm">1 min ago</span>
                  </div>
                  <div className="text-zinc-300 mb-3">Running test suite and staging deployment now. I&apos;ll promote to production once smoke tests pass.</div>
                  <div className="bg-black rounded p-3 text-sm font-mono">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckIcon className="w-4 h-4" />
                      run_tests() passed
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckIcon className="w-4 h-4" />
                      deploy_to_staging() done
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckIcon className="w-4 h-4" />
                      smoke_test() passed
                    </div>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <ClockIcon className="w-4 h-4" />
                      deploy_to_production() running
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold">You</span>
                    <span className="text-zinc-500 text-sm">just now</span>
                  </div>
                  <div className="text-zinc-300">Approved. Go ahead.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
              Governance
            </Badge>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              You&apos;re the board.
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Approve hires, override strategy, pause or terminate any agent at any time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4">
                  <SymbolIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">An org chart for agents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  Hierarchies, roles, reporting lines. Your agents don&apos;t freelance — they have a boss, a title, and a job description.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">A governance layer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  You sit at the top. Approve hires, review strategy, override decisions. Agents work for you, not the other way around.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4">
                  <SymbolIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">A cost control system</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  Every agent has a budget. Every tool call has a price. You see where money goes before it&apos;s gone.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Full observability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  Every ticket traced. Every decision explained. Every tool call logged. Nothing happens in the dark.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Start with a template
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Pre-built companies ready to deploy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="bg-white dark:bg-black border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4">
                    {template.icon}
                  </div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{template.agents} agents</Badge>
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-white dark:bg-black border-2 border-dashed border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors flex items-center justify-center min-h-[200px]">
              <CardContent className="text-center">
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mx-auto mb-4">
                  <PlusIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg mb-2">Publish Your Own</CardTitle>
                <CardDescription>Share your template with the community</CardDescription>
                <Badge variant="outline" className="mt-4">Coming Soon</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-black dark:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-zinc-600 dark:text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
            From zero to autonomous company<br />in one command.
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">
            Open source. Self-hosted. Interactive setup walks you through installation and first company. No Paperclip account required.
          </p>
          <div className="bg-zinc-950 rounded-lg overflow-hidden shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-zinc-500">terminal</div>
            </div>
            <div className="p-6 text-left">
              <code className="text-lg text-green-400">
                <span className="text-zinc-500">$</span> npx paperclipai onboard --yes
              </code>
              <div className="mt-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Open source</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Self-hosted</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Interactive setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>No account required</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/paperclipai/paperclip" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center gap-2">
                <StarIcon className="w-5 h-5" />
                Star on GitHub
              </Button>
            </a>
            <a href="https://github.com/paperclipai/paperclip/blob/main/README.md" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2">
                Read the Docs
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
                  <span className="text-white dark:text-black font-bold text-lg">P</span>
                </div>
                <span className="font-bold text-xl text-black dark:text-white">Paperclip</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Open-source orchestration for zero-human companies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">How it Works</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/paperclipai/paperclip" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center gap-1"><GitHubLogoIcon className="w-4 h-4" /> GitHub</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Discord</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Terms</a></li>
                <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">License (MIT)</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2025 Paperclip. Open source under MIT license.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data
const features = [
  { icon: <GlobeIcon className="w-5 h-5" />, title: "Bring Your Own Agent", description: "Any agent, any runtime, one org chart. If it can receive a heartbeat, it&apos;s hired." },
  { icon: <RocketIcon className="w-5 h-5" />, title: "Goal Alignment", description: "Every task traces back to the company mission. Agents know what to do and why." },
  { icon: <ClockIcon className="w-5 h-5" />, title: "Heartbeats", description: "Agents wake on a schedule, check work, and act. Delegation flows up and down the org chart." },
  { icon: <SymbolIcon className="w-5 h-5" />, title: "Cost Control", description: "Monthly budgets per agent. When they hit the limit, they stop. No runaway costs." },
  { icon: <SymbolIcon className="w-5 h-5" />, title: "Multi-Company", description: "One deployment, many companies. Complete data isolation. One control plane for your portfolio." },
  { icon: <FileText className="w-5 h-5" />, title: "Ticket System", description: "Every conversation traced. Every decision explained. Full tool-call tracing and audit log." },
  { icon: <Shield className="w-5 h-5" />, title: "Governance", description: "You&apos;re the board. Approve hires, override strategy, pause or terminate any agent at any time." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Org Chart", description: "Hierarchies, roles, reporting lines. Your agents have a boss, a title, and a job description." },
  { icon: <MagnifyingGlassIcon className="w-5 h-5" />, title: "Mobile Ready", description: "Monitor and manage your autonomous businesses from anywhere." },
];

const agents = [
  { initial: "OC", name: "OpenClaw" },
  { initial: "C", name: "Claude" },
  { initial: "CX", name: "Codex" },
  { initial: "CU", name: "Cursor" },
  { initial: "SH", name: "Bash" },
  { initial: "HT", name: "HTTP" },
];

const heartbeats = [
  { role: "Content Writer", interval: "4h", tasks: ["Draft blog post", "Edit copy", "Write newsletter", "Social captions", "Review drafts", "Publish batch", "Daily report"] },
  { role: "SEO Analyst", interval: "8h", tasks: ["Crawl audit", "Keyword research", "Rank tracking", "Link report"] },
  { role: "Social Manager", interval: "12h", tasks: ["Schedule posts", "Engage replies", "Analytics review", "Brand mentions"] },
];

const costs = [
  { initial: "C", name: "CEO Claude", role: "Chief Executive", spent: 0, budget: 60 },
  { initial: "M", name: "CMO OpenClaw", role: "Marketing", spent: 0, budget: 40 },
  { initial: "T", name: "CTO Cursor", role: "Technology", spent: 0, budget: 50 },
  { initial: "O", name: "COO Claude", role: "Operations", spent: 0, budget: 30 },
  { initial: "D", name: "CodexCoder", role: "Engineer", spent: 0, budget: 30 },
  { initial: "L", name: "ClaudeCoder", role: "Engineer", spent: 0, budget: 30 },
];

const companies = [
  { name: "Mobile Marketing Co", agents: 8, roles: ["CEO", "VP Marketing", "VP Growth", "Content", "Ads", "SEO", "Analytics"] },
  { name: "John Street Hyperliquid Fund", agents: 14, roles: ["Managing Partner", "Trading", "Research", "Risk", "Quant", "Exec Bot", "Scout", "Hedger"] },
  { name: "Faceless TikTok Factory", agents: 5, roles: ["Producer", "Scriptwriter", "Video Editor", "Voice", "Thumbnail", "Scheduler"] },
];

const templates = [
  { name: "Content Marketing Agency", description: "SEO, blogs, social media on autopilot", agents: 8, category: "Marketing", icon: <GlobeIcon className="w-6 h-6" /> },
  { name: "Crypto Trading Desk", description: "Analysis, execution, risk, compliance", agents: 12, category: "Finance", icon: <BarChart3 className="w-6 h-6" /> },
  { name: "E-commerce Operator", description: "Listings, support, inventory, ads", agents: 10, category: "E-commerce", icon: <FileText className="w-6 h-6" /> },
  { name: "YouTube Factory", description: "Scripts, edits, thumbnails, scheduling", agents: 6, category: "Media", icon: <RocketIcon className="w-6 h-6" /> },
  { name: "Dev Agency", description: "PM, engineers, QA, DevOps pipeline", agents: 9, category: "Software", icon: <SymbolIcon className="w-6 h-6" /> },
  { name: "Real Estate Leads", description: "Prospecting, outreach, follow-up, closing", agents: 7, category: "Sales", icon: <SymbolIcon className="w-6 h-6" /> },
];

const faqs = [
  {
    question: "How is Paperclip different from agents like OpenClaw or Claude Code?",
    answer: "Paperclip uses those agents. It orchestrates them into a company — with org charts, budgets, goals, governance, and accountability. If you have one agent, you probably don't need Paperclip. If you have twenty — you definitely do."
  },
  {
    question: "Can I use my existing agents?",
    answer: "Yes. Paperclip is unopinionated about agent runtimes. Your agents can be Claude Code sessions, OpenClaw bots, Python scripts, shell commands, HTTP webhooks — anything that can receive a heartbeat signal."
  },
  {
    question: "What happens when an agent hits its budget limit?",
    answer: "At 100% budget utilization the agent auto-pauses and new tasks are blocked. You get a soft warning at 80%. As the board, you can override the limit at any time and resume the agent."
  },
  {
    question: "Can I run multiple companies?",
    answer: "Yes. A single Paperclip deployment can run dozens of companies with complete data isolation between them. Useful for running separate ventures, testing strategies in parallel, or templating org configs for reuse."
  },
  {
    question: "Is Paperclip open source?",
    answer: "Yes. MIT licensed, self-hosted, no Paperclip account required. Interactive setup walks you through database configuration and creating your first company. Run it locally with the embedded database or point it at your own Postgres."
  },
];
