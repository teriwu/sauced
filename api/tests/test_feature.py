import os
from unittest import TestCase


class FeatureTests(TestCase):
    def test_flake8_installed(self):
        try:
            import pytest  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'flake8' installed in the environment")