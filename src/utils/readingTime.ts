export const calculateReadingTime = (text: string): number => {
    const wordsPerMinute = 200;
    // Remove markdown symbols just in case, though not strictly necessary for rough estimate
    const cleanText = text.replace(/[#*`]/g, '');
    const numberOfWords = cleanText.split(/\s+/).length;
    const readingTime = Math.ceil(numberOfWords / wordsPerMinute);
    return readingTime;
};
