import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"

// This would typically come from a database or CMS
const isAvailableForHire = true

export function HiringStatus() {
  return (
    <Card className="w-fit">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          {isAvailableForHire ? (
            <>
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-medium">Şu anda işe alım yapıyorum</p>
                <p className="text-sm text-muted-foreground">Yeni projeler için müsaitim</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Müsait
              </Badge>
            </>
          ) : (
            <>
              <Clock className="h-5 w-5 text-orange-500" />
              <div>
                <p className="font-medium">Şu anda işe alım yapmıyorum</p>
                <p className="text-sm text-muted-foreground">Mevcut projelerle meşgulüm</p>
              </div>
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
              >
                Meşgul
              </Badge>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
