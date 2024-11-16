if [ -L "$0" ] && [ -x "$(which greadlink)" ]; then
	THIS_FILE="$(greadlink -mn "$0")"
elif [ -L "$0" ] && [ -x "$(which readlink)" ]; then
	THIS_FILE="$(readlink -mn "$0")"
else
	THIS_FILE="$0"
fi
THIS_DIR="$(dirname "$THIS_FILE")"

cd "$THIS_DIR"

for F in *svg; do
	echo converting $F
	inkscape --export-type=png "$F"
done
