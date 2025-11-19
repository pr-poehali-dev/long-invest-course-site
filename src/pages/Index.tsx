import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const handlePayment = (plan: string) => {
    setSelectedPlan(plan);
    setPaymentOpen(true);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" className="text-primary" size={28} />
              <span className="text-xl font-bold">Инвест Академия</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="hover:text-primary transition-colors">О курсе</a>
              <a href="#program" className="hover:text-primary transition-colors">Программа</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Стоимость</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Записаться</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Старт через 14 дней
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Инвестируй в будущее <span className="text-primary">правильно</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Научись создавать пассивный доход через долгосрочные инвестиции. 
                От базовых понятий до профессиональных стратегий за 8 недель.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  Начать обучение
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button size="lg" variant="outline">
                  Программа курса
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">8 недель</div>
                  <div className="text-sm text-muted-foreground">Длительность</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/45122058-276f-4870-9513-6d5dab2d902f/files/5cccfc30-47bf-411f-a5d7-e4289968fcfa.jpg"
                alt="Investment Growth"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">О курсе</Badge>
            <h2 className="text-4xl font-bold mb-4">Что вы получите</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Практические навыки и знания для успешного старта в мире инвестиций
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'BookOpen',
                title: 'Фундаментальные знания',
                description: 'Изучите основы инвестирования, типы активов и принципы диверсификации портфеля'
              },
              {
                icon: 'TrendingUp',
                title: 'Практические стратегии',
                description: 'Освойте проверенные методы долгосрочного инвестирования и управления рисками'
              },
              {
                icon: 'Target',
                title: 'Реальные результаты',
                description: 'Создайте свой инвестиционный портфель и начните зарабатывать уже во время обучения'
              },
              {
                icon: 'Users',
                title: 'Менторская поддержка',
                description: 'Персональная обратная связь от экспертов с опытом управления капиталом от $1M'
              },
              {
                icon: 'LineChart',
                title: 'Аналитические инструменты',
                description: 'Доступ к профессиональным платформам и сервисам для анализа рынка'
              },
              {
                icon: 'Shield',
                title: 'Управление рисками',
                description: 'Научитесь защищать капитал и минимизировать потери в любых рыночных условиях'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Программа</Badge>
            <h2 className="text-4xl font-bold mb-4">8 недель до первого портфеля</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Структурированная программа от новичка до уверенного инвестора
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                week: 'Неделя 1-2',
                title: 'Основы инвестирования',
                topics: ['Типы активов и финансовые инструменты', 'Психология инвестора', 'Риск и доходность', 'Брокерские счета и налоги']
              },
              {
                week: 'Неделя 3-4',
                title: 'Анализ и оценка активов',
                topics: ['Фундаментальный анализ компаний', 'Технический анализ графиков', 'Макроэкономические факторы', 'Оценка облигаций и ETF']
              },
              {
                week: 'Неделя 5-6',
                title: 'Построение портфеля',
                topics: ['Стратегии диверсификации', 'Ребалансировка портфеля', 'Пассивные и активные стратегии', 'Альтернативные инвестиции']
              },
              {
                week: 'Неделя 7-8',
                title: 'Практика и управление',
                topics: ['Создание личного портфеля', 'Риск-менеджмент', 'Долгосрочное планирование', 'Психология долгосрочных инвестиций']
              }
            ].map((module, idx) => (
              <Card key={idx} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2">{module.week}</Badge>
                      <CardTitle className="text-2xl">{module.title}</CardTitle>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="CheckCircle2" className="text-primary" size={16} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Стоимость</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите свой тариф</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Инвестиция в знания приносит наибольший доход
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '29,900',
                description: 'Для самостоятельного изучения',
                features: [
                  'Доступ ко всем видео-лекциям',
                  'Учебные материалы и чек-листы',
                  'Доступ к закрытому чату',
                  'Сертификат о прохождении',
                  'Доступ к материалам 6 месяцев'
                ],
                popular: false
              },
              {
                name: 'Стандарт',
                price: '49,900',
                description: 'Самый популярный выбор',
                features: [
                  'Всё из тарифа "Базовый"',
                  '4 групповых созвона с экспертом',
                  'Проверка домашних заданий',
                  'Разбор вашего портфеля',
                  'Доступ к материалам 1 год',
                  'Бонусный модуль по криптовалютам'
                ],
                popular: true
              },
              {
                name: 'VIP',
                price: '99,900',
                description: 'Максимальный результат',
                features: [
                  'Всё из тарифа "Стандарт"',
                  '2 личные консультации 1-на-1',
                  'Персональная инвестстратегия',
                  'Приоритетная поддержка 24/7',
                  'Пожизненный доступ',
                  'Участие в закрытом клубе инвесторов',
                  'Доступ к премиум инструментам'
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => handlePayment(plan.name)}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Истории успеха учеников</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 2,500 человек уже изменили свое финансовое будущее
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Александр Петров',
                role: 'Предприниматель',
                image: 'https://cdn.poehali.dev/projects/45122058-276f-4870-9513-6d5dab2d902f/files/e6b7d9e9-a3b0-4161-9f0e-fef73248bf0a.jpg',
                text: 'За 3 месяца после курса мой портфель вырос на 18%. Главное - я научился принимать взвешенные решения без эмоций.',
                rating: 5
              },
              {
                name: 'Мария Соколова',
                role: 'Маркетолог',
                image: 'https://cdn.poehali.dev/projects/45122058-276f-4870-9513-6d5dab2d902f/files/e6b7d9e9-a3b0-4161-9f0e-fef73248bf0a.jpg',
                text: 'Курс полностью изменил мое отношение к деньгам. Теперь я уверенно инвестирую 30% дохода и планирую финансовую независимость.',
                rating: 5
              },
              {
                name: 'Дмитрий Волков',
                role: 'IT-специалист',
                image: 'https://cdn.poehali.dev/projects/45122058-276f-4870-9513-6d5dab2d902f/files/e6b7d9e9-a3b0-4161-9f0e-fef73248bf0a.jpg',
                text: 'Структурированная программа и поддержка менторов - то что нужно. Создал сбалансированный портфель всего за 2 недели.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами, и мы поможем выбрать подходящий тариф
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Ваш вопрос..." rows={4} />
                </div>
                <Button className="w-full">Отправить</Button>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@investacademy.ru</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon name="Phone" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-muted-foreground">@investacademy_bot</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" className="text-primary" size={24} />
                <span className="font-bold">Инвест Академия</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для будущих инвесторов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курс</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary">О курсе</a></li>
                <li><a href="#program" className="hover:text-primary">Программа</a></li>
                <li><a href="#pricing" className="hover:text-primary">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Договор оферты</a></li>
                <li><a href="#" className="hover:text-primary">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Инвест Академия. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Оформление тарифа: {selectedPlan}</DialogTitle>
            <DialogDescription>
              Заполните данные для оплаты. После подтверждения вы получите доступ к курсу.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="fullname">Полное имя</Label>
              <Input id="fullname" placeholder="Иван Иванов" />
            </div>
            <div>
              <Label htmlFor="payment-email">Email</Label>
              <Input id="payment-email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" placeholder="+7 (___) ___-__-__" />
            </div>
            <div className="pt-4 space-y-2">
              <Button className="w-full gap-2">
                <Icon name="CreditCard" size={20} />
                Оплатить картой
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Icon name="Wallet" size={20} />
                Оплатить через СБП
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              Нажимая "Оплатить", вы соглашаетесь с условиями договора оферты
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
