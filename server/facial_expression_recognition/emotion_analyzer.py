from collections import defaultdict

class EmotionAnalyzer:
    def __init__(self):
        self.emotion_data = defaultdict(lambda: defaultdict(int))
        self.style_emotion_data = defaultdict(lambda: defaultdict(int))
        self.total_emotions = defaultdict(int)

    def add_emotion(self, image_id, emotion, style):
        if image_id is not None:
            self.emotion_data[image_id][emotion] += 1
            self.total_emotions[emotion] += 1
            if style:
                self.style_emotion_data[style][emotion] += 1
    def get_emotion_summary(self, image_id):
        return dict(self.emotion_data[image_id]) if image_id is not None else {}
    
    def get_style_emotion_summary(self, style):
        if style:
            return dict(self.style_emotion_data[style])
        return {}
    

    def get_all_data(self):
        return {
            'image_data': {k: dict(v) for k, v in self.emotion_data.items()},
            'style_data': {k: dict(v) for k, v in self.style_emotion_data.items()}
        }
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
    def calculate_style_scores(self):
            positive_emotions = {'happy', 'surprise'}
            negative_emotions = {'angry', 'disgust', 'fear', 'sad'}
            neutral_emotions = {'neutral'}

            style_scores = defaultdict(int)
            positive_total = 0

            for style, emotions in self.style_emotion_data.items():
                score = 0
                for emotion, count in emotions.items():
                    if emotion in positive_emotions:
                        score += (count * 10)
                    elif emotion in neutral_emotions:
                        score += 3
                    elif emotion in negative_emotions:
                        score += (count * 1)

                style_scores[style] = score

                if score >= 0:
                    positive_total += score

            # Calculate percentage for each positive style
            style_percentages = {}
            for style, score in style_scores.items():
                if score > 0:
                    style_percentages[style] = (score / positive_total) * 100

            return style_scores, style_percentages
    def calculate_emotion_percentages(self):
        total_count = sum(self.total_emotions.values())
        emotion_percentages = {}
        
        for emotion, count in self.total_emotions.items():
            if total_count > 0:
                emotion_percentages[emotion] = (count / total_count) * 100
            else:
                emotion_percentages[emotion] = 0
        
        return emotion_percentages    