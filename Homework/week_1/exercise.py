# Name : Lonneke Lammers
# Student number : 10371672
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.


def split_string(source, separators):
    '''
    Split a string <source> on any of the characters in <separators>.

    The ouput of this function should be a list of strings split at the
    positions of each of the separator characters.
    '''
    # make lists
    sep_list = len(separators)
    source_list = len(source)
    new_list = []
    start = 0

    # append word in new_list
    for i in range(source_list):
        for j in range(sep_list):
            if separators[j] == source[i]:
                given_word = source[start:i]
                if len(given_word) > 0:
                    new_list.append(given_word)
                    given_word = ""
                start = i+1

    given_word = source[start:len(source)]
    if given_word != "":
        new_list.append(given_word)

    return new_list

if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    print split_string('abacadabra', 'ba')  # should print: ['c', 'd', 'r']
