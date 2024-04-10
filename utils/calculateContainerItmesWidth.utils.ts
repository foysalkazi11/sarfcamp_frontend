
export function calculateContainerItemWidth(containerWidth:number, gap:number, totalPadding:number, numberOfItems:number) {
    // // Calculate the total horizontal space taken by padding on both sides
    // const totalPadding = padding * 2;

    // Calculate the total width occupied by items and gaps
    const totalWidthOccupied = containerWidth - totalPadding - (gap * (numberOfItems - 1));

    // Calculate the width of each item as a percentage
    const itemWidthPercentage = totalWidthOccupied / containerWidth * 100 / numberOfItems;

    return itemWidthPercentage;
}

export function calculateContainerWiderItemWidth(containerWidth:number, gap:number, totalPadding:number, numberOfItems:number, widerItemWidth:number) {
    // // Calculate the total horizontal space taken by padding on both sides
    // const totalPadding = padding * 2;

    // Calculate the total width occupied by items and gaps
    const totalWidthOccupied = containerWidth - totalPadding - (gap * (numberOfItems - 1));

    // Calculate the width of each regular item as a percentage
    const regularItemWidthPercentage = (totalWidthOccupied - widerItemWidth) / containerWidth * 100 / (numberOfItems - 1);

    // Calculate the width of the wider item as a percentage
    const widerItemWidthPercentage = widerItemWidth / containerWidth * 100;

    return {  widerItemWidthPercentage:widerItemWidthPercentage.toFixed(2),regularItemWidthPercentage:regularItemWidthPercentage.toFixed(2)  };
}