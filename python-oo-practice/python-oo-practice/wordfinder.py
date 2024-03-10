"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    """Finds random words from dictionary.
    >>> wf = WordFinder("test.txt")
    4 words read
    >>> wf.random() in ["cat", "dog", "mouse", "house"]
    True
    >>> wf.random() in ["cat", "dog", "mouse", "house"]
    True
    >>> wf.random() in ["cat", "dog", "mouse", "house"]
    True
    """

    def __init__(self, path):

        dictionary = open(path)
        self.words = self.parse(dictionary)
        print(f"{len(self.words)} words read")

    def parse(self, dict_file):

        return [w.strip() for w in dict_file]

    
    def random(self):

        """return random word"""
        return random.choice(self.words)

    
class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines/comments.
    
    >>> swf = SpecialWordFinder("test2.txt")
    6 words read

    >>> swf.random() in ["grass", "flower", "tree", "cow", "pig", "dog"]
    True

    >>> swf.random() in ["grass", "flower", "tree", "cow", "pig", "dog"]
    True

    >>> swf.random() in ["grass", "flower", "tree", "cow", "pig", "dog"]
    True
    """

    def parse(self, dictionary):
        """Parse dictionary skipping # and blanks"""

        return [w.strip() for w in dictionary if w.strip() and not w.startswith("#")]
    


