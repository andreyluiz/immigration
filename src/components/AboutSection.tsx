import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="https://placehold.co/600x800/0047ab/FFFFFF/png?text=OUR+TEAM"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">About Our Team</h2>

            <div className="space-y-4">
              <p className="text-foreground/80">
                Founded by Andrey Luiz, our team consists of immigration
                specialists, legal advisors, and cultural integration experts
                who have personally experienced the journey from Brazil to
                Europe.
              </p>

              <p className="text-foreground/80">
                We understand the challenges, complexities, and emotional
                aspects of relocating to a new country, and our mission is to
                make this transition as smooth as possible for our clients.
              </p>

              <p className="text-foreground/80">
                Our combined experience spans over 15 years of helping
                Brazilians successfully establish new lives across various
                European countries including Portugal, Spain, Germany, Italy,
                and France.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  15+
                </span>
                <span className="text-sm text-foreground/70">
                  Years Experience
                </span>
              </div>

              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  500+
                </span>
                <span className="text-sm text-foreground/70">
                  Clients Served
                </span>
              </div>

              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  98%
                </span>
                <span className="text-sm text-foreground/70">Success Rate</span>
              </div>

              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  12
                </span>
                <span className="text-sm text-foreground/70">Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
