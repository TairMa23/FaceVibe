from collections import defaultdict

class EmotionAnalyzer:
    def __init__(self):
        self.emotion_data = defaultdict(lambda: defaultdict(int))
        self.style_emotion_data = defaultdict(lambda: {'count': defaultdict(int), 'scores': defaultdict(float)})
        self.total_emotions = defaultdict(int)
        self.emotion_type = {"positive_emotions":{'happy', 'surprise'},"negative_emotions":{'angry', 'disgust', 'fear', 'sad'},"neutral_emotions":{'neutral'}}

    def add_emotion(self, image_id, emotion, style, score):
        if image_id is not None:
            self.emotion_data[image_id][emotion] += 1
            self.total_emotions[emotion] += 1
            if style:
                current_count = self.style_emotion_data[style]['count'][emotion]
                new_count = current_count + 1
                self.style_emotion_data[style]['count'][emotion] = new_count
                
                # Update average score directly
                current_avg = self.style_emotion_data[style]['scores'][emotion]
                new_avg = (current_avg * current_count + score) / new_count
                self.style_emotion_data[style]['scores'][emotion] = round(new_avg, 2)
    def get_style_emotion_summary(self, style):
        if style:
            return {
                'count': dict(self.style_emotion_data[style]['count']),
                'scores': dict(self.style_emotion_data[style]['scores'])
            }
        return {}
    def get_all_data(self):
        return {
            'image_data': {k: dict(v) for k, v in self.emotion_data.items()},
            'style_data': {
                k: {
                    'count': dict(v['count']),
                    'scores': dict(v['scores'])
                } for k, v in self.style_emotion_data.items()
            }
        }
    def calculate_style_scores(self):
        style_scores = defaultdict(float)
        positive_total = 0
        positive_or_neutral = False

        for style, emotions in self.style_emotion_data.items():
            total_weighted_score = 0
            positive_weighted_score = 0

            for emotion, count in emotions['count'].items():
                score = emotions['scores'][emotion]
                if emotion in self.emotion_type['positive_emotions']:
                    positive_or_neutral = True
                    weight = 1
                elif emotion in self.emotion_type['neutral_emotions']:
                    positive_or_neutral = True
                    weight = 1
                elif emotion in self.emotion_type['negative_emotions']:
                    positive_or_neutral = False
                    weight = score
                else:
                    continue

                # Calculate the weighted score for this emotion
                weighted_score = count * weight
                total_weighted_score += weighted_score

                if positive_or_neutral == True:  # Positive and neutral emotions
                    positive_weighted_score += (weighted_score * score)
            
            print(style)
            print("positive_weighted_score: ",positive_weighted_score)
            print('total_weighted_score: ', total_weighted_score)
            # Calculate the percentage of positive and neutral emotions
            style_scores[style] = positive_weighted_score / total_weighted_score * 100 if total_weighted_score > 0 else 0
            print(style_scores[style])
        print(self.get_all_data())
        return style_scores
    def calculate_emotion_percentages(self):
        total_count = sum(self.total_emotions.values())
        emotion_percentages = {}
        
        for emotion, count in self.total_emotions.items():
            if total_count > 0:
                emotion_percentages[emotion] = (count / total_count) * 100
            else:
                emotion_percentages[emotion] = 0
        
        return emotion_percentages    