from unittest import TestCase

class FeatureTests(TestCase):
    def test_pytest_installed(self):
        try:
            import fastapi  
        except ModuleNotFoundError:
            self.fail("Could not find 'fastapi' installed in the environment")