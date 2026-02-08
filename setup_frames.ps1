
$sourceDir = ".."
$destDir = "public/frames"
New-Item -ItemType Directory -Force -Path $destDir

$files = Get-ChildItem -Path $sourceDir -Filter "ezgif-frame-*.jpg" | Sort-Object Name

$i = 0
foreach ($file in $files) {
    $newName = "frame_$i.jpg"
    Copy-Item -Path $file.FullName -Destination "$destDir/$newName"
    $i++
}
Write-Host "Moved and renamed $i frames."
