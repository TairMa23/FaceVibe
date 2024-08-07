from collections import defaultdict

class EmotionAnalyzer:
    def __init__(self):
        self.emotion_data = defaultdict(lambda: {'emotions': defaultdict(int), 'styles': set()})

    def add_emotion(self, image_id, emotion, style):
        if image_id is not None:
            self.emotion_data[image_id]['emotions'][emotion] += 1
            if style:
                self.emotion_data[image_id]['styles'].add(style)

    def get_emotion_summary(self, image_id):
        if image_id is not None:
            data = self.emotion_data[image_id]
            return {'emotions': dict(data['emotions']), 'styles': list(data['styles'])}
        return {}

    def get_all_data(self):
        return {k: {'emotions': dict(v['emotions']), 'styles': list(v['styles'])} for k, v in self.emotion_data.items()}

    def sort_images_by_happiness(self):
        sorted_images = sorted(
            self.emotion_data.items(),
            key=lambda x: x[1]['emotions'].get('happy', 0),
            reverse=True
        )
        return [
            {
                'image_id': image_id,
                'happiness_count': data['emotions'].get('happy', 0),
                'emotions': dict(data['emotions']),
                'styles': list(data['styles'])
            }
            for image_id, data in sorted_images
        ]
