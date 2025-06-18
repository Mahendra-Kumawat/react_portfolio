import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { experienceData } from "@/constants/CustomData/PortfolioData"
import { Briefcase } from "lucide-react"

export function CardDemo() {
  return (
    <section className="pt-24" id="experience">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
        Experience
      </h2>

      <div>
        {experienceData.map((item, index) => (
          <Card key={index} className="w-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                {item.role}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {item.company} · {item.location}
              </CardDescription>
              <p className="text-sm text-gray-500">{item.duration}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm md:text-base">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
