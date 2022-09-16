from unittest import TestCase


class FeatureTests(TestCase):
    def test_pytest_installed(self):
        try:
            import cryptography
        except ModuleNotFoundError:
            self.fail("Could not find 'cryptography' installed in the environment")
