export function altFromFileName(imgName) {
    const nameArray = imgName.split("/").pop();
    const removeImgType = nameArray.replace(/\.[^.]+$/, "");
    const spaced = removeImgType.replace(/-/g, " ");
    const altImgValue = spaced
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return altImgValue;
}
// split("/") chops everything up into an array at the /
// .pop() takes the last item of the array - "large-logo.png"
// .replace(pattern, "") finds a pattern and replaces it with nothing, removes the .png - "large-logo"
// .replace() swaps every hyphen for a space - "large logo"
// then capitalize each word - "Large Logo"
