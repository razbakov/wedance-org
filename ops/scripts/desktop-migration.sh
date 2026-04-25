#!/usr/bin/env bash
# ============================================================================
# Desktop Migration v2 — flat structure, no internal sorting
# Updated: 2026-04-25 by main chat (Maya hit rate limit, Kirill changed spec)
# ----------------------------------------------------------------------------
# Spec from Kirill (2026-04-25):
#   - Папки на Desktop соответствуют проектам (всё на Desktop = материалы по проектам)
#   - Внутри проектных папок не сортируем (плоско)
#   - Что кажется мусором → отдельная папка "Мусор" (не удалять сразу)
#   - AI-картинки сохранить ВСЕ
#   - Bandicam удалить (кладём в Мусор для верификации)
#   - C7133, C7266 — оставить на Desktop как есть
#   - Папка "Social Dance TV" — пока не трогаем
#   - .lnk ярлыки — оставить на Desktop
#
# Usage:
#   bash desktop-migration.sh           (DRY RUN — печатает, не двигает)
#   bash desktop-migration.sh --apply   (реальное перемещение)
# ============================================================================

set -u

DESKTOP="/c/Users/ASUS/Desktop"
DRY_RUN=true
[ "${1:-}" = "--apply" ] && DRY_RUN=false

cd "$DESKTOP" || { echo "FATAL: $DESKTOP not found"; exit 1; }

PREFIX="DRY"
[ "$DRY_RUN" = "false" ] && PREFIX="RUN"

mv_safe() {
  local src="$1" dst="$2"
  [ -e "$src" ] || return 0
  if [ "$DRY_RUN" = "true" ]; then
    echo "[$PREFIX] mv \"$src\" → $dst/"
  else
    mv "$src" "$dst/" && echo "[$PREFIX] mv \"$src\" → $dst/"
  fi
}

mv_glob() {
  local pattern="$1" dst="$2"
  shopt -s nullglob
  for f in $pattern; do
    mv_safe "$f" "$dst"
  done
  shopt -u nullglob
}

mkfolder() {
  if [ "$DRY_RUN" = "true" ]; then
    echo "[$PREFIX] mkdir -p \"$1\""
  else
    mkdir -p "$1" && echo "[$PREFIX] mkdir -p \"$1\""
  fi
}

# ============================================================================
echo "=========================================="
echo "  Desktop Migration — Mode: $([ "$DRY_RUN" = "true" ] && echo DRY-RUN || echo APPLY)"
echo "  Path: $DESKTOP"
echo "=========================================="

if [ "$DRY_RUN" = "false" ]; then
  echo ""
  echo "APPLY mode — Ctrl+C в 5 секунд для отмены..."
  sleep 5
fi

# ============================================================================
echo ""
echo "--- 1. Создаём папки ---"
mkfolder "SDTV"
mkfolder "Arancha"
mkfolder "Lumen-Atelier"
mkfolder "iKEEGAi"
mkfolder "WeDance"
mkfolder "Personal"
mkfolder "Screenshots"
mkfolder "Мусор"

# ============================================================================
echo ""
echo "--- 2. SDTV ---"
mv_safe "ADC _ Social Dance Agreement-1.pdf" "SDTV"
mv_safe "VIDEO AGREEMENT NYISC.docx" "SDTV"
mv_safe "Price Social Dance TV 2023.pdf" "SDTV"
mv_safe "sdtv22.pdf" "SDTV"
mv_safe "Диаграмма.pdf" "SDTV"
mv_safe "SDTV_Lean_MVP_Spec.docx" "SDTV"
mv_safe "SDTV_Photo_Capture_v1.1.docx" "SDTV"
mv_safe "SDTV_Quick_Messages.pdf" "SDTV"
mv_safe "NW Concept sdtv WORDING.docx" "SDTV"
mv_safe "PLAN.docx" "SDTV"
mv_safe "Scripts.docx" "SDTV"
mv_safe "Festivals Plan.docx" "SDTV"
mv_safe "Social Dance TV (2).docx" "SDTV"
mv_safe "Social Dance TV _ Notion.pdf" "SDTV"
mv_safe "mediakit400K.pdf" "SDTV"
mv_safe "artists_output.xlsx" "SDTV"
mv_safe "SCHEDULE 2025 IG.docx" "SDTV"
mv_safe "мерч.docx" "SDTV"
mv_safe "нужен контент-оператор календаря на пару часов в день..docx" "SDTV"
mv_safe "12.pdf" "SDTV"
# Web snapshots
mv_safe "SDTV Operations.mhtml" "SDTV"
mv_safe "SDTV — Festival Portal.mhtml" "SDTV"
mv_safe "SDTV — Festival Promo Plan.mhtml" "SDTV"
# Promo videos
mv_safe "SDTV promo.mp4" "SDTV"
mv_safe "AFTER MOVIE 2025 WEB.mp4" "SDTV"
mv_safe "AWARD FINAL 2022.mp4" "SDTV"
mv_safe "Template_yotube 4K.mp4" "SDTV"
mv_safe "Хороший пример видео для промо .mp4" "SDTV"
mv_safe "Reels.mp4" "SDTV"
mv_safe "Reels_1.mp4" "SDTV"
mv_safe "After.mpeg" "SDTV"
mv_safe "Dancer.Final.mp4" "SDTV"
# Audio (рабочие треки для видео)
mv_safe "Borojol.mp3" "SDTV"
mv_safe "Istanbul 26_2.mp3.mpeg" "SDTV"
mv_safe "Magics.mp3.mpeg" "SDTV"
mv_safe "2.mp3.mpeg" "SDTV"
# Form / dev
mv_safe "sdtv-form-v3.zip" "SDTV"
mv_safe "sdtv-form-v3-deploy.zip" "SDTV"
mv_safe "sdtv-form-v3.tar.gz" "SDTV"
mv_safe "sdtv-form-guide.py" "SDTV"
mv_safe "sdtv-mindmap.py" "SDTV"
mv_safe "app.js" "SDTV"
mv_safe "sdtv-form-architecture.png" "SDTV"
mv_safe "sdtv-form-mindmap.png" "SDTV"
# Logo / brand
mv_safe "sdtv-logo-1.ai" "SDTV"
mv_safe "sdtv-logo-1 (2).png" "SDTV"
mv_safe "sdtv-logo-shadow (2).png" "SDTV"
mv_safe "sdtv_case_study_redesign_annotated.jpg" "SDTV"
# Subfolders
mv_safe "FESTIVAL" "SDTV"
mv_safe "FILES" "SDTV"
mv_safe "PHOTOS" "SDTV"
mv_safe "100MSDCF" "SDTV"
mv_safe "INSTA DATA" "SDTV"
mv_safe "Прайс Промо" "SDTV"
mv_safe "МАРКЕТИНГ КАНАЛА САЙТ" "SDTV"
mv_safe "САЙТ Social Dance TV" "SDTV"
mv_safe "Year 0000_New Festival" "SDTV"
mv_safe "Year 0000_New Festival.rar" "SDTV"

# ============================================================================
echo ""
echo "--- 3. Arancha (жена + wedding + brand) ---"
mv_safe "260520 - ARANCHA & KIRILL - WEDDING PROPOSAL SERVICES 1.pdf" "Arancha"
mv_safe "Luna de Miel.docx" "Arancha"
mv_safe "Solicitud de matrimonio Civil.pdf" "Arancha"
mv_safe "para-arancha.pdf" "Arancha"
mv_safe "Almiral_Room_rooms.docx" "Arancha"
mv_safe "DELE A2_Modelo de hoja de respuesta.pdf" "Arancha"
mv_safe "ES.pdf" "Arancha"
mv_safe "112" "Arancha"
mv_safe "3 фото" "Arancha"

# ============================================================================
echo ""
echo "--- 4. Lumen-Atelier ---"
# (на Desktop сейчас нет файлов с таким префиксом по последнему скану — папка пустая)
# Если появится "Personal Brand Studio*.mhtml" — добавь сюда

# ============================================================================
echo ""
echo "--- 5. iKEEGAi ---"
mv_safe "iKEEGAi — AI Orchestrator for service businesses.mhtml" "iKEEGAi"

# ============================================================================
echo ""
echo "--- 6. WeDance ---"
mv_safe "founders_collaboration_memo_v2.pdf" "WeDance"

# ============================================================================
echo ""
echo "--- 7. Personal ---"
mv_safe "CV" "Personal"
mv_safe "DSC01051.JPG" "Personal"

# ============================================================================
echo ""
echo "--- 8. Screenshots (визуальный пул: скрины, AI-генерации, рефы) ---"
# Numbered Windows screenshots
mv_glob "Screenshot_*.jpg" "Screenshots"
mv_glob "Screenshot_*.png" "Screenshots"
# UUID AI-generated images
mv_glob "*-*-*-*-*.png" "Screenshots"
mv_glob "*-*-*-*-*.webp" "Screenshots"
# Short hash AI-generated
mv_glob "[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f].png" "Screenshots"
# External AI sources
mv_glob "-e-x-t-e-r-n-a-l*" "Screenshots"
# Telegram / phone photo dumps
mv_glob "photo_*.jpg" "Screenshots"
mv_glob "_*.jpg" "Screenshots"
# Videoframes
mv_glob "videoframe_*.png" "Screenshots"
# Crops
mv_glob "crop*.jpg" "Screenshots"
# Unnamed dumps
mv_glob "unname*" "Screenshots"
mv_glob "unnamed*" "Screenshots"
mv_glob "unnd*" "Screenshots"
# Behance hashes
mv_glob "*247275279*" "Screenshots"
mv_glob "0ea13f70945433*" "Screenshots"
# Facebook FB ID screenshots
mv_glob "499913710_*" "Screenshots"
mv_glob "508684434_*" "Screenshots"
mv_glob "509437083_*" "Screenshots"
mv_glob "649229318_*" "Screenshots"
# Sora / Claude-generated
mv_glob "task_*source.mp4" "Screenshots"
mv_glob "original-*.mp4" "Screenshots"
mv_glob "generated-image*" "Screenshots"
# Misc visuals
mv_safe "Rectangle-266-768x1429.png" "Screenshots"
mv_safe "Find-Your-Personalized-Program.webp" "Screenshots"
mv_safe "apple-iphone-low-battery-popup-warning.webp" "Screenshots"
mv_safe "phone-light.webm" "Screenshots"
mv_safe "DSC06937-2500.jpg" "Screenshots"
mv_safe "1399000017.jpg" "Screenshots"
mv_safe "1399000091.jpg" "Screenshots"
mv_safe "1933374098.jpg" "Screenshots"
mv_safe "34.jpg" "Screenshots"
mv_safe "6W5mIOgmsW36iUy62iTDbXMvPNbONP4njBbz3gvasC6Yh2MjYXOWwDrxTTp_HtJxOGb1_LpUIO89psxZF1R8MiD7.jpg" "Screenshots"
mv_safe "XEVbZuTNzwNC5_S5PT5QCv8eyWLcAH3lDEXNqlWLO4PleCUfoSapIhb1wDdOjrxs90SamSP_qdtsjHJcQaPO8gQo.jpg" "Screenshots"
mv_safe "YBAYdXRMd5Dg_tuo_HVoVXREGje_vzhnyWaMiStYhnilMN2kKvKxNSJQ4sI-Gc88kFsRRWamaT5X7EB0514sknPV.jpg" "Screenshots"
mv_safe "YDzqAZ3674sdRFxzY3zQZTrC3Mx86fw26AOTIhKhKBffO4ylrqe1ca3q4PTVecBnSnZLh3PM.jpg" "Screenshots"

# ============================================================================
echo ""
echo "--- 9. Мусор ---"
# Bandicam (Кирилл сказал удалить — кладём для верификации)
mv_glob "bandicam*" "Мусор"
# Word lock files
mv_glob "~\$*" "Мусор"
mv_glob "~WRL*" "Мусор"
# Empty Word docs
mv_glob "New Документ Microsoft Word*.docx" "Мусор"
mv_safe "New folder" "Мусор"
# Random text dumps
mv_safe "1.txt" "Мусор"
mv_safe "FAQ.txt" "Мусор"
mv_safe "Report.txt" "Мусор"

# ============================================================================
echo ""
echo "=========================================="
echo "  ГОТОВО"
echo "=========================================="
if [ "$DRY_RUN" = "true" ]; then
  echo ""
  echo "Это был DRY-RUN. Чтобы реально переместить:"
  echo "  bash $0 --apply"
else
  echo ""
  echo "Перемещение завершено. Что осталось проверить:"
  echo "  1. ls $DESKTOP/Мусор/  — убедись что там действительно мусор"
  echo "  2. Если ок: rm -rf \"$DESKTOP/Мусор\""
  echo ""
  echo "Не тронуто (по решению Кирилла):"
  echo "  - C7133 ara in the business.MP4"
  echo "  - C7266.MP4"
  echo "  - Social Dance TV/  (папка)"
  echo "  - *.lnk             (ярлыки)"
  echo "  - desktop.ini       (системный)"
fi
