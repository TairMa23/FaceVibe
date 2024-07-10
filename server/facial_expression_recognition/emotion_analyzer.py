from collections import defaultdict

class EmotionAnalyzer:
    def __init__(self):
        self.emotion_data = defaultdict(lambda: defaultdict(int))

    def add_emotion(self, image_id, emotion):
        if image_id is not None:
            self.emotion_data[image_id][emotion] += 1

    def get_emotion_summary(self, image_id):
        return dict(self.emotion_data[image_id]) if image_id is not None else {}

    def get_all_data(self):
        return {k: dict(v) for k, v in self.emotion_data.items()}

    def sort_images_by_happiness(self):
        # מיון התמונות לפי כמות הפעמים שזוהתה שמחה
        sorted_images = sorted(
            self.emotion_data.items(),
            key=lambda x: x[1].get('happy', 0),
            reverse=True
        )
        return [
            {
                'image_id': image_id,
                'happiness_count': emotions.get('happy', 0),
                'emotions': dict(emotions)
            }
            for image_id, emotions in sorted_images
        ]