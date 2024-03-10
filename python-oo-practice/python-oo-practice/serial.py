"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start=0):
        """Make a new generator, starting at start."""

        self.start = self.add = start

    def reset(self):
        """Reset number."""

        self.add = self.start
    
    def generate(self):
        """Add one to number"""

        self.add += 1

        return self.add - 1



        
