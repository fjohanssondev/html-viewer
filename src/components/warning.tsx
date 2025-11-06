import { Alert, AlertDescription } from '@/components/ui/alert';

function Warning({ errors, warnings }: { errors: string[]; warnings: string[] }) {
  return (
    <>
      {errors.length > 0 && (
        <Alert variant="destructive">
          <AlertDescription>
            <div className="font-semibold mb-1">Errors:</div>
            <ul className="list-disc list-inside text-xs space-y-1">
              {errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {warnings.length > 0 && errors.length === 0 && (
        <Alert className="border-yellow-500 bg-yellow-50">
          <AlertDescription className="text-yellow-800">
            <div className="font-semibold mb-1">Warnings:</div>
            <ul className="list-disc list-inside text-xs space-y-1">
              {warnings.map((warning, i) => (
                <li key={i}>{warning}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}

export { Warning }