from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True


    def test_homepage(self):
        """Make sure information is in the session and HTML is displayed"""

        with self.client:
            response = self.client.get('/')
            self.assertIn('board', session)
            self.assertIn(b'<p>High Score:', response.data)
            self.assertIsNone(session.get('highscore'))
            self.assertIsNone(session.get('nplays'))
            self.assertIn(b'Score:', response.data)
            self.assertIn(b'Seconds Left:', response.data)

    def test_valid_word(self):
        """Test if word is valid by modifying the board in the session"""

        with self.client as client:
            with client.session_transaction() as sess:
                sess['board'] = [["M", "O", "U", "S", "E"], 
                                ["H", "O", "U", "S", "E"], 
                                ["F", "A", "N", "C", "Y"], 
                                ["P", "A", "R", "T", "Y"], 
                                ["G", "U", "A", "R", "D"]]
        response = self.client.get('/check?word=mouse')
        self.assertEqual(response.json['result'], 'ok')
        response = self.client.get('/check?word=house')
        self.assertEqual(response.json['result'], 'ok')
        response = self.client.get('/check?word=fancy')
        self.assertEqual(response.json['result'], 'ok')
        response = self.client.get('/check?word=party')
        self.assertEqual(response.json['result'], 'ok')

    def test_invalid_word(self):
        """Test if word is in the dictionary but not on the bord"""

        self.client.get('/')
        response = self.client.get('/check?word=invisible')
        self.assertEqual(response.json['result'], 'not-on-board')

    def not_word(self):
        """Test if word is not real word """

        self.client.get('/')
        response = self.client.get(
            '/check?word=asdfgasdfgdfdsfs')
        self.assertEqual(response.json['result'], 'not-word')