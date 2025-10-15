find . -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.heic -o -iname \*.tiff -o -iname \*.gif \) -size +5M -print0 | while IFS= read -r -d $'\0' file; do
    cp $file "$(dirname "$file")/original_$(basename "$file")"
    magick "$file" -resize 1920x "$(dirname "$file")/""$(basename "$file")"
done


find . -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.heic -o -iname \*.tiff -o -iname \*.gif \) -size +25M -print0 | while IFS= read -r -d $'\0' file; do
    cp $file "$(dirname "$file")/original_$(basename "$file")"
    magick "$file" -resize 1920x "$(dirname "$file")/""$(basename "$file")"
done


find . -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.heic -o -iname \*.tiff -o -iname \*.gif \) -size +1M -print0 | while IFS= read -r -d $'\0' file; do
    magick "$file" -resize x670 "$(dirname "$file")/""preview-670y-$(basename "$file")"
done

find . -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.heic -o -iname \*.tiff -o -iname \*.gif \) -size +1M -print0 | while IFS= read -r -d $'\0' file; do
    magick "$file" -resize 800x "$(dirname "$file")/""preview-800x-$(basename "$file")"
done

find . -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.heic -o -iname \*.tiff -o -iname \*.gif \) -size +100kb -print0 | while IFS= read -r -d $'\0' file; do
    magick "$file" -resize 512x "$(dirname "$file")/""preview-512x-$(basename "$file")"
done


find . -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.heic -o -iname \*.tiff -o -iname \*.gif \) -size +1M -print0 | while IFS= read -r -d $'\0' file; do
    magick "$file" -resize 1200x "$(dirname "$file")/""preview-1200x-$(basename "$file")"
done
