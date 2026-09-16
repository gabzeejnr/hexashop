function removeArrayDuplicates(array: string[]): string[] {
    return array.filter((it, i) => array.indexOf(it) === i)
}

export { removeArrayDuplicates }