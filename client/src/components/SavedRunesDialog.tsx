import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Trash2, Clock, History } from "lucide-react";
import {
  type SavedRuneConversion,
  getSavedConversions,
  deleteRuneConversion,
  formatTimestamp,
} from "@/lib/localStorageUtils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SavedRunesDialogProps {
  onSelectResult: (result: SavedRuneConversion) => void;
}

export default function SavedRunesDialog({ onSelectResult }: SavedRunesDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [savedResults, setSavedResults] = useState<SavedRuneConversion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Load saved results when dialog opens
  useEffect(() => {
    if (isOpen) {
      setSavedResults(getSavedConversions());
    }
  }, [isOpen]);

  const handleDelete = (id: string) => {
    deleteRuneConversion(id);
    setSavedResults(savedResults.filter((result) => result.id !== id));
    setDeleteId(null);
  };

  const handleSelect = (result: SavedRuneConversion) => {
    onSelectResult(result);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <History className="w-4 h-4" />
          <span>{t("loadLocal")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-parchment border-viking-gold/30 max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cinzel text-viking-brown">
            {t("savedResults")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            저장된 룬 문자 변환 결과 목록을 확인하고 관리할 수 있습니다
          </DialogDescription>
        </DialogHeader>

        {savedResults.length === 0 ? (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{t("noSavedResults")}</AlertTitle>
            <AlertDescription>
              {t("noSavedResults")}
            </AlertDescription>
          </Alert>
        ) : (
          <div className="space-y-4 mt-4">
            {savedResults.map((result) => (
              <Card key={result.id} className="bg-parchment-darker border-viking-gold/20">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <h3 className="font-bold text-viking-brown">
                        {result.koreanName} ({result.englishName})
                      </h3>
                      <p className="text-2xl rune-character">{result.runeText}</p>
                      <div className="flex items-center text-text-brown-light text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{formatTimestamp(result.timestamp)}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-viking-gold/80 hover:bg-viking-gold"
                        onClick={() => handleSelect(result)}
                      >
                        {t("loadLocal")}
                      </Button>
                      <AlertDialog open={deleteId === result.id} onOpenChange={(open) => !open && setDeleteId(null)}>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setDeleteId(result.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-parchment border-viking-gold/30">
                          <AlertDialogHeader>
                            <AlertDialogTitle>{t("confirmDelete")}</AlertDialogTitle>
                            <AlertDialogDescription>
                              {result.koreanName} ({result.englishName})
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(result.id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              {t("deleteResult")}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
