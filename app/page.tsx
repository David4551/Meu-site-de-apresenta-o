import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Music, Code, ExternalLink, Play } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4">
            <h1 className="font-mono text-2xl font-bold text-primary">D.H Matos</h1>
            <nav className="flex items-center space-x-6">
              <a
                href="#sobre"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre
              </a>
              <a
                href="#projetos"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Projetos
              </a>
              <a
                href="#musica"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Música
              </a>
              <a
                href="#contato"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="container relative px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-lg opacity-50" />
                  <Image
                    src="/professional-headshot-of-a-young-programmer-and-mu.jpg"
                    alt="David Matos"
                    width={200}
                    height={200}
                    className="relative rounded-full border-4 border-primary/50 object-cover"
                  />
                </div>
              </div>
              <h1 className="font-mono text-4xl font-bold tracking-tight text-balance md:text-6xl">
                Desenvolvedor & <span className="text-primary">Artista</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Estudante de programação apaixonado por tecnologia e música. Criando experiências digitais e expressões
                artísticas.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <Code className="h-4 w-4" />
                  Ver Projetos
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Music className="h-4 w-4" />
                  Ouvir Música
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-mono text-3xl font-bold text-center mb-12">Sobre Mim</h2>
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Code className="h-6 w-6 text-primary" />
                        Habilidades de Programação
                      </CardTitle>
                      <CardDescription className="text-base">
                        Estudante focado em desenvolvimento web moderno, criando aplicações funcionais, rápidas e
                        responsivas
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Frontend</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            HTML5
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            CSS3
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            JavaScript
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            TypeScript
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            React
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            Next.js
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            Tailwind CSS
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Backend & Ferramentas</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            Node.js
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            Express
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            MongoDB
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            Git
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            GitHub
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            VS Code
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Aprendendo</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-primary/50 text-muted-foreground">
                            Python
                          </Badge>
                          <Badge variant="outline" className="border-primary/50 text-muted-foreground">
                            PostgreSQL
                          </Badge>
                          <Badge variant="outline" className="border-primary/50 text-muted-foreground">
                            Docker
                          </Badge>
                          <Badge variant="outline" className="border-primary/50 text-muted-foreground">
                            AWS
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      Música
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Apaixonado por Hip-hop e Rap, uso a música para expressar ideias e sentimentos de forma criativa e
                      autêntica.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Hip-hop</Badge>
                      <Badge variant="secondary">Rap</Badge>
                      <Badge variant="secondary">Produção</Badge>
                      <Badge variant="secondary">Composição</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Programming Projects */}
        <section id="projetos" className="py-24 bg-card/30">
          <div className="container px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-mono text-3xl font-bold text-center mb-12">Projetos de Programação</h2>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto">
                <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Portfolio Website</CardTitle>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardDescription>Site pessoal desenvolvido com HTML, CSS e JavaScript</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                      <Code className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        HTML
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        CSS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        JavaScript
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Music Projects */}
        <section id="musica" className="py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-mono text-3xl font-bold text-center mb-12">Projetos Musicais</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src="/hip-hop-album-cover-art-with-urban-aesthetic.jpg"
                          alt="Projeto Musical 1"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                        <Button
                          size="sm"
                          className="absolute inset-0 m-auto h-8 w-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          asChild
                        >
                          <a
                            href="https://open.spotify.com/track/7tkPm7LoiW4BlHGsoEUHh5"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Play className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Primeiro Single</h3>
                        <p className="text-sm text-muted-foreground">Hip-hop • 2024</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Minha primeira produção musical disponível no Spotify
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href="https://open.spotify.com/track/7tkPm7LoiW4BlHGsoEUHh5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src="/rap-album-cover-with-modern-design-and-bold-typogr.jpg"
                          alt="Projeto Musical 2"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                        <Button
                          size="sm"
                          className="absolute inset-0 m-auto h-8 w-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          asChild
                        >
                          <a
                            href="https://open.spotify.com/track/4yawlNqB3t45dnqYyTV4aO"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Play className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Segundo Single</h3>
                        <p className="text-sm text-muted-foreground">Rap • 2024</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Evolução artística com letras mais elaboradas
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href="https://open.spotify.com/track/4yawlNqB3t45dnqYyTV4aO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 bg-card/30">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-mono text-3xl font-bold text-center mb-12">Entre em Contato</h2>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Nome
                        </label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Mensagem
                      </label>
                      <Textarea id="message" placeholder="Sua mensagem..." className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-card/50 py-12">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center space-x-4">
                  <h3 className="font-mono text-lg font-bold text-primary">D.H Matos</h3>
                  <span className="text-sm text-muted-foreground">Desenvolvedor & Artista</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-8 border-t border-border pt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} D.H Matos. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
